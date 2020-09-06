import React, {useEffect, useRef, useState} from "react";
import {useModal} from "../../../hooks";
import InputMask from "react-input-mask";
import {convertPhoneForBackend, parseCookies} from "../../../helpers/utils";
import axios from "../../../axios-api";
import {ErrorMessage, Form, Formik} from "formik";
import {object, string} from "yup";
import {FormikGroup} from "../../../components/UI";
import {AddressForm, Card, Modal, Success} from "../../../components";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {CartLayout} from "../../../layouts";
import {PaymentCard, PaymentMethod} from "../../../components/Payment";
import * as gtag from '../../../lib/gtag'
import {E_BOOKS_ONLY, MIXED, PRINTED_ONLY, useCart, useCartManipulator} from "../../../components/Cart";
import {useAuthModal} from "../../../components/Auth";
import {useTranslation} from "react-i18next";

let fData = null;

const Comment = ({className, getFieldProps}) => (
    <Card className={className}>
        <Card.Header>Оставьте комментарии</Card.Header>
        <Card.Body>
            <FormikGroup
                name="comment"
                as="textarea"
                placeholder="Ориентир, дополнительный номер и т.д"
                {...getFieldProps("comment")}
                size="sm"
            >
                Комментарий
            </FormikGroup>
        </Card.Body>
    </Card>
)

const OrderPage = ({queryCase, isAuthorized, profile}) => {
    const { i18n } = useTranslation()
    const allOnlineRef = useRef(true)
    const [showInputMask, setShowInputMask] = useState(false);
    const [methodOfPayment, setMethodOfPayment] = useState(queryCase !== 1 ? 2 : 0);
    const [stage, setStage] = useState(0);
    const { getBooksByType, getBooksExceptType, getIds } = useCart()
    const { onClearCart } = useCartManipulator()
    const { onShow } = useAuthModal()
    const purchaseModal = useModal();
    const mixedBooksPaymentModal = useModal();
    const paymentModal = useModal();

    const isOnlineBooks = queryCase === E_BOOKS_ONLY
    const isPrintedBooks = queryCase === PRINTED_ONLY
    const isMixedBooks = queryCase === MIXED

    useEffect(() => {
        setShowInputMask(true);
        setMethodOfPayment(isPrintedBooks ? 0 : 2)
        fData = new FormData();
    }, []);

    useEffect(() => {
        if (stage > 0) mixedBooksPaymentModal.onShow()
        else mixedBooksPaymentModal.onHide()
    }, [stage])

    const onSubmit = values => {
        initFormData(values)
        if (!isAuthorized) {
           onShow();
        }
        if (isAuthorized && !isMixedBooks) {
            paymentModal.onShow()
        }
        if (isAuthorized && isMixedBooks) {
            setStage(stage + 1);
        }
    }

    const methodOfPaymentHandler = id => {
        setMethodOfPayment(id);
    };
    const paymentHandler = condition => {
        setStage(stage + 1);
        allOnlineRef.current = condition;
    }
    const mixedBooksPaymentHide = () => {
        setStage(stage - 1);
    }
    const submitPaymentMix = () => {
        if (isOnlineBooks || isPrintedBooks) {
            fData.delete('payment_type')
            fData.append('payment_type', (methodOfPayment + 1).toString())
            purchaseHandler()
                .then(res => {
                    if (methodOfPayment < 2) {
                        gtag.event({
                            action: 'Only_online_or_only_printed_books_offline_payment',
                            category: 'purchase',
                            label: 'Purchase by offline payment'
                        })
                        onClearCart();
                        purchaseModal.onShow();
                        mixedBooksPaymentModal.onHide()
                        paymentModal.onHide()
                    } else {
                        gtag.event({
                            action: 'Only_online_or_only_printed_books_card_payment',
                            category: 'purchase',
                            label: 'Purchase by card payment'
                        })
                        location.href = res.data.redirect_url;
                    }
                })
                .catch(err => console.log(err))
        } else if (allOnlineRef.current) {
            // true - online fully
            purchaseHandler()
                .then(res => {
                    gtag.event({
                        action: 'purchase_all_online',
                        category: 'purchase',
                        label: 'Online payment'
                    })
                    location.href = res.data.redirect_url
                })
                .catch(err => console.log(err))
        } else {
            // false - separate online, audio from printed books and then submit one by one
            fData.delete('books')
            // get printed books
            const printedBooksIds = getBooksByType(2).map(el => el.id);
            fData.append('books', printedBooksIds)
            fData.delete('payment_type')
            fData.append('payment_type', 1)

            purchaseHandler().then(res => {
                // get online and audio books
                const ebooksIds = getBooksExceptType(2).map(el => el.id);
                fData.delete('books')
                fData.delete('payment_type')
                fData.append('books', ebooksIds)
                fData.append('payment_type', (methodOfPayment + 1).toString())

                return purchaseHandler()
            })
                .then(res => {
                    gtag.event({
                        action: 'purchase_mix',
                        category: 'purchase',
                        label: 'Purchase when printed books are paid offline, online books are paid via card'
                    })
                    return res
                })
                .then(res => location.href = res.data.redirect_url)
                .catch(err => console.log(err))

        }
    }
    const initFormData = ({phone, name, email, city, district, street, house, address, comment}) => {
        const formData = new FormData();
        formData.append("phone", convertPhoneForBackend(phone));
        formData.append("fio", name);
        formData.append("email", email);
        formData.append("city", city);
        formData.append("region", district);
        formData.append("street", street);
        formData.append("house", house);
        formData.append("full_adress", address);
        formData.append("comment", comment);
        formData.append("payment_type", (methodOfPayment + 1).toString());
        formData.append("books", getIds());
        formData.append('source', navigator.userAgent)
        fData = formData;
    }
    const purchaseHandler = () => {
        return axios.post("orders/create", fData, {
            headers: {
                Authorization: `Bearer ${parseCookies(null).token}`
            }
        });
    };

    const initialValues = {
        phone: profile?.phone || "",
        name: profile?.fio || "",
        email: profile?.email || "",
        city: profile?.city || "Ташкент",
        district: profile?.region || "Сергелийский",
        street: profile?.street || "",
        house: profile?.house || "",
        address: profile?.full_adress || "",
        comment: ""
    }
    const validationSchema = object({
        phone: string().min(8).required("Введите номер"),
        name: string().required("Имя обязательно"),
        email: string().email(),
        street: isOnlineBooks ? string() : string().required("Введите улицу"),
        house: isOnlineBooks ? string() : string().required("Введите номер дома")
    })

    // Modal
    const paymentMethodModal = (
        <Modal
            modal={mixedBooksPaymentModal}
            onHide={mixedBooksPaymentHide}
        >
            {isMixedBooks && stage > 1 ?
                (
                    <PaymentCard
                        isPrintedBooks={isPrintedBooks}
                        methodOfPayment={methodOfPayment}
                        methodOfPaymentClicked={methodOfPaymentHandler}
                        methodOfPaymentList={getMethodsOfPayment()}
                        submitPaymentMix={submitPaymentMix}

                    />
                )
                : (
                    <Card className="mt-3">
                        <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
                        <Card.Body>
                            <PaymentMethod clicked={paymentHandler}/>
                        </Card.Body>
                    </Card>
                )}
        </Modal>
    )
    const pModal = (
        <Modal modal={paymentModal}>
            <PaymentCard
                isPrintedBooks={isPrintedBooks}
                methodOfPayment={methodOfPayment}
                methodOfPaymentClicked={methodOfPaymentHandler}
                methodOfPaymentList={getMethodsOfPayment()}
                submitPaymentMix={submitPaymentMix}
            />
        </Modal>
    )
    return (
        <React.Fragment>
            <Modal modal={purchaseModal}>
                {methodOfPayment < 2 && (
                    <Success closed={purchaseModal.onHide}/>
                )}
            </Modal>
            {paymentMethodModal}
            {pModal}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({handleSubmit, getFieldProps}) => (
                    <Form onSubmit={handleSubmit}>
                        <CartLayout isOrderPage>
                            <Row>
                                <Col>
                                    <h2>Оформить заказ</h2>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Card className="mb-3">
                                        <Card.Header>Номера телефона*</Card.Header>
                                        <Card.Body>
                                            {showInputMask && (
                                                <>
                                                    <InputMask
                                                        className="form-control form-control-sm mt-3"
                                                        mask="+\9\98 (99) 999-99-99"
                                                        name="phone"
                                                        placeholder="+998 (__) ___-__-__"
                                                        alwaysShowMask={true}
                                                        value={getFieldProps("phone").value}
                                                        onChange={getFieldProps("phone").onChange}

                                                    />
                                                    <span className="text-danger text-small">
                                                    <ErrorMessage name="phone"/>
                                                </span>
                                                </>
                                            )}
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
                                        <Card.Body>
                                            <FormikGroup name="name" {...getFieldProps("name")} size="sm">
                                                Имя*
                                            </FormikGroup>
                                            <FormikGroup name="email" {...getFieldProps("email")} size="sm">
                                                Эл. почта (для получения эл. версии)
                                            </FormikGroup>
                                        </Card.Body>
                                    </Card>
                                    {isMixedBooks && (
                                        <Comment
                                            className="mt-3"
                                            getFieldProps={getFieldProps}
                                        />
                                    )}
                                </Col>
                                <Col md={6}>
                                    {!isOnlineBooks && (
                                        <Card>
                                            <Card.Header>АДРЕС ДОСТАВКИ</Card.Header>
                                            <Card.Body>
                                                <AddressForm getFieldProps={getFieldProps}/>
                                                <FormikGroup name="address" {...getFieldProps("address")} size="sm">
                                                    Указать в формате КВАРТАЛ-ДОМ-КВАРТИРА
                                                </FormikGroup>
                                            </Card.Body>
                                        </Card>
                                    )}
                                    {!isMixedBooks && (
                                        <Comment
                                            className="mt-3"
                                            getFieldProps={getFieldProps}
                                        />
                                    )}
                                </Col>
                            </Row>
                        </CartLayout>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};

const getMethodsOfPayment = () => [
    {
        id: 0,
        title: "Cash"
    },
    {
        id: 1,
        title: "Plastic card"
    },
    {
        id: 2,
        title: "Click",
        percent: "3.2"
    },
    {
        id: 3,
        title: "Payme",
        percent: "2"
    }
];

export const getServerSideProps = async ({req, query}) => {
    let profile = null;
    const token = parseCookies(req).token;
    if (token) {
        profile = await axios.get("profile", req);
        profile = profile.data;
    }

    return {
        props: {
            profile,
            queryCase: +query.case
        }
    };
};
const mapStateToProps = state => {
    return {
        isAuthorized: state.auth.token !== null
    };
};
export default connect(mapStateToProps)(OrderPage);
