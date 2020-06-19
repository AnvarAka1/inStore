import React, {useState, useEffect, useContext} from "react";
import {LangContext, CartContext, AuthModalContext} from "../../../store/";
import {useModal} from "../../../hooks";
import InputMask from "react-input-mask";
import {parseCookies, convertPhoneForBackend} from "../../../helpers/utils";
import axios from "../../../axios-api";
import {ErrorMessage, Form, Formik} from "formik";
import {object, string} from "yup";
import {FormikGroup} from "../../../components/UI";
import {Card, Modal, Success, Payment, PaymentMethod, AddressForm} from "../../../components";
import {Row, Col, Button} from "react-bootstrap";
import {connect} from "react-redux";
import {CartLayout} from "../../../layouts";

let fData = null;

const OrderPage = props => {
    const [showInputMask, setShowInputMask] = useState(false);
    const [methodOfPayment, setMethodOfPayment] = useState(props.queryCase !== 1 ? 2 : 0);
    const [stage, setStage] = useState(0);
    const [isAllOnline, setIsAllOnline] = useState(true)
    const langContext = useContext(LangContext);
    const cartContext = useContext(CartContext);
    const authModalContext = useContext(AuthModalContext);
    const purchaseModal = useModal();
    const paymentModal = useModal();
    const payModal = useModal();
    useEffect(() => {
        setShowInputMask(true);
        setMethodOfPayment(props.queryCase !== 1 ? 2 : 0)
        fData = new FormData();
    }, []);
    useEffect(() => {
        if (stage > 0) paymentModal.onShow()
        else paymentModal.onHide()
    }, [stage])
    const methodOfPaymentHandler = (id, percent) => {
        setMethodOfPayment(id);
    };
    const paymentHandler = (condition) => {
        setStage(stage + 1);
        setIsAllOnline(condition);
    }
    const paymentHide = () => {
        setStage(stage - 1);
    }
    const submitPaymentMix = () => {
        if (props.queryCase === 0 || props.queryCase === 1) {
            purchaseHandler().then(res => {
                if (methodOfPayment < 2) {
                    cartContext.onClearCart();
                    purchaseModal.onShow();
                } else {
                    // redirect to another page
                    // setPaymentLink(res.data.redirect_url);
                    location.href = res.data.redirect_url;
                }
            })
            return
        }
        // true - online fully
        if(isAllOnline) purchaseHandler().then(res => location.href = res.data.redirect_url).catch(err => console.log(err))
        else{
        // false - separate online, audio from printed books and then submit one by one
            fData.delete('books')
            // get printed books
            const printedBooksIds = cartContext.getBooksByType(2).map(el => el.id);
            fData.append('books', printedBooksIds)
            fData.delete('payment_type')
            fData.append('payment_type', 1)

            purchaseHandler().then(res => {
                // get online and audio books
                const ebooksIds = cartContext.getBooksExceptType(2).map(el => el.id);
                fData.delete('books')
                fData.delete('payment_type')
                fData.append('books', ebooksIds)
                fData.append('payment_type', (methodOfPayment + 1).toString())

                return purchaseHandler()
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
        formData.append("books", cartContext.getIds());
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
    const lang = langContext.lang;
    const initialValues = {
        phone: props.profile?.phone || "",
        name: props.profile?.fio || "",
        email: props.profile?.email || "",
        city: props.profile?.city || "Ташкент",
        district: props.profile?.region || "Сергелийский",
        street: props.profile?.street || "",
        house: props.profile?.house || "",
        address: props.profile?.full_adress || "",
        comment: ""
    }
    const validationSchema = object({
        phone: string().min(8).required("Введите номер"),
        name: string().required("Имя обязательно"),
        email: string().email().required(),
        street: props.queryCase === 0 ? string() : string().required("Введите улицу"),
        house: props.queryCase === 0 ? string() : string().required("Введите номер дома"),
        address: props.queryCase === 0 ? string() : string().required("Заполните это поле")
    })
    const paymentCard = <Card className="mt-3">
        <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
        <Card.Body>
            <Payment
                lang={lang}
                methodOfPayment={methodOfPayment}
                methodOfPaymentClicked={methodOfPaymentHandler}
                methodOfPaymentList={getMethodsOfPayment()}
                queryCase={props.queryCase}
            />
            {<Button onClick={submitPaymentMix} className="mt-2 w-100" type="submit">
                Оформить заказ
            </Button>}
        </Card.Body>
    </Card>
    // Modal
    const paymentMethodModal = <Modal modal={paymentModal} onHide={paymentHide}>
        {props.queryCase === 2 && stage > 1 ?
            <>
                {paymentCard}
            </>
            :
            <Card className="mt-3">
                <Card.Header>СПОСОБ ОПЛАТЫ</Card.Header>
                <Card.Body><PaymentMethod lang={lang} clicked={paymentHandler}/></Card.Body>
            </Card>}
    </Modal>
    const pModal = <Modal modal={payModal}>
        {paymentCard}
    </Modal>
    return (
        <React.Fragment>
            <Modal modal={purchaseModal}>
                {methodOfPayment < 2 && (
                    <Success lang={langContext.lang} closed={purchaseModal.onHide}/>
                )}
            </Modal>
            {paymentMethodModal}
            {pModal}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    if (props.isAuthorized) {
                        initFormData(values)
                        if(props.queryCase !== 2){
                            payModal.onShow()
                        }else{
                            setStage(stage + 1);
                        }
                    } else authModalContext.authModal.onShow();
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
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
                                                    value={formik.getFieldProps("phone").value}
                                                    onChange={formik.getFieldProps("phone").onChange}

                                                />
                                                <span className="text-danger text-small">
                                                    <ErrorMessage name="phone" />
                                                </span>
                                                </>
                                            )}
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Header>КОНТАКТНАЯ ИНФОРМАЦИЯ</Card.Header>
                                        <Card.Body>
                                            <FormikGroup name="name" {...formik.getFieldProps("name")} size="sm">
                                                Имя*
                                            </FormikGroup>
                                            <FormikGroup name="email" {...formik.getFieldProps("email")} size="sm">
                                                Эл. почта (для получения эл. версии)
                                            </FormikGroup>
                                        </Card.Body>
                                    </Card>
                                    {props.queryCase === 2 &&
                                        (
                                            <Card className="mt-3">
                                                <Card.Header>Оставьте комментарии</Card.Header>
                                                <Card.Body>
                                                    <FormikGroup
                                                        name="comment"
                                                        as="textarea"
                                                        placeholder="Ориентир, дополнительный номер и т.д"
                                                        {...formik.getFieldProps("comment")}
                                                        size="sm"
                                                    >
                                                        Комментарий
                                                    </FormikGroup>
                                                </Card.Body>
                                            </Card>
                                        )}
                                </Col>
                                <Col md={6}>
                                    {props.queryCase !== 0 && <Card>
                                        <Card.Header>АДРЕС ДОСТАВКИ</Card.Header>
                                        <Card.Body>
                                            <AddressForm getFieldProps={formik.getFieldProps} />
                                            <FormikGroup name="address" {...formik.getFieldProps("address")} size="sm">
                                                Указать в формате КВАРТАЛ-ДОМ-КВАРТИРА
                                            </FormikGroup>
                                        </Card.Body>
                                    </Card>}
                                    {props.queryCase !== 2 && <Card>
                                        <Card.Header>Оставьте комментарии</Card.Header>
                                        <Card.Body>
                                            <FormikGroup
                                                name="comment"
                                                as="textarea"
                                                placeholder="Ориентир, дополнительный номер и т.д"
                                                {...formik.getFieldProps("comment")}
                                                size="sm"
                                            >
                                                Комментарий
                                            </FormikGroup>
                                        </Card.Body>
                                    </Card>}
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
        titles: ["Наличные деньги", "Cash", "Uzb"]
    },
    {
        id: 1,
        titles: ["Пластиковая карта", "Plastic card", "Uzb"]
    },
    {
        id: 2,
        titles: ["Click", "Click", "Click"],
        percent: "3.2"
    },
    {
        id: 3,
        titles: ["Payme", "Payme", "Payme"],
        percent: "2"
    }
];

export const getServerSideProps = async ({req, query}) => {
    let profile = null;
    const token = parseCookies(req).token;
    if (token) {
        profile = await axios.get("profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
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
