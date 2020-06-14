import React, {useState, useEffect} from "react";
import {convertPhoneForBackend, convertBackToFrontDate, parseCookies} from "../../helpers/utils";
import axios from "../../axios-api";
import ErrorPage from "../404";
import {Button, Row, Col, FormLabel, FormGroup} from "react-bootstrap";
import {FormikGroup} from "../../components/UI";
import {AddressForm} from "../../components";
import {Form, Formik} from "formik";
import {object, string, date} from "yup";
import {ProfileLayout} from "../../layouts";
// can make static page also
const defaultImage = "/images/avatar.png";
const SettingsPage = ({userData, error}) => {
    const [avatar, setAvatar] = useState(userData && userData.avatar ? userData.avatar : defaultImage);
    if (error) {
        return <ErrorPage/>;
    }

    let personalInfoInitialValues = {
        avatar: "",
        name: userData.fio,
        dob: userData.dob,
        gender: userData.gender ? userData.gender : "m",
        phone: userData.phone,
        city: userData.city ? userData.city : "Ташкент",
        district: userData.region ? userData.region : "Сергелийский",
        street: userData.street ? userData.street : "",
        house: userData.house ? userData.house : ""

    };
    let passwordInitialValues = {
        curPassword: "",
        newPassword: "",
        repPassword: ""
    };

    const updatePersonalInformationHandler = values => {
        const formData = new FormData();
        const {
            avatar,
            name,
            dob,
            gender,
            phone,
            city,
            district,
            street,
            house
        } = values
        if (avatar) formData.append("avatar", avatar);
        formData.append("fio", name);
        if (dob) formData.append("dob", dob);
        formData.append("gender", gender);
        formData.append("phone", convertPhoneForBackend(phone));
        formData.append("city", city);
        formData.append("region", district);
        formData.append("street", street);
        formData.append("house", house);

        return axios
            .patch("profile/", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                setAvatar(res.data.avatar);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const updatePasswordHandler = () => {
        const formData = new FormData();
        formData.append("old_password", values.curPassword);
        formData.append("new_password", values.newPassword);

		return axios.put("profile/password", formData, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		});
	};

    return (
        <ProfileLayout>
            <Row>
                <Col sm={12}>
                    <h2>Настройки</h2>
                    <p className="mb-5">ID пользователя: {userData.id}</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={6}>
                    <h6 className="text-md">Персональные данные</h6>
                    <Formik
                        initialValues={personalInfoInitialValues}
                        onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(true);
                            updatePersonalInformationHandler(values)
                                .then(res => {

                                })
                                .catch(err => console.log(err))
                                .finally(() => {
                                    setSubmitting(false);
                                });
                        }}
                        validationSchema={object({
                            name: string()
                                .min(2, "Имя должно содержать минимум 2 буквы")
                                .max(100, "Name is too long")
                                .required("Name is required!"),
                            dob: date(),
                            gender: string().required(),
                            phone: string()
                        })}
                    >
                        {({values, handleChange, getFieldProps, handleSubmit, isSubmitting, isValidating, setFieldValue}) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup className="mb-0">
                                    <FormLabel htmlFor="upload-button">
                                        <p className="text-small">Фотография профиля</p>
                                        <div className="d-flex align-items-center justify-content-start mt-2">
                                            <div className="avatar">
                                                <img src={avatar} className="image" alt="avatar"></img>
                                            </div>
                                            <p className="ml-1 text-small">Выбрать файл</p>
                                        </div>
                                    </FormLabel>
                                    <input
                                        type="file"
                                        style={{display: "none"}}
                                        id="upload-button"
                                        name="avatar"
                                        onChange={event => setFieldValue("avatar", event.currentTarget.files[0])}
                                    />
                                </FormGroup>
                                <FormikGroup name="name" onChange={handleChange} value={values.name} size="sm">
                                    Ф.И.О
                                </FormikGroup>
                                <FormikGroup
                                    name="dob"
                                    onChange={handleChange}
                                    value={values.dob}
                                    type="date"
                                    size="sm"
                                >
                                    Дата рождения
                                </FormikGroup>
                                <FormikGroup
                                    name="gender"
                                    onChange={handleChange}
                                    value={values.gender}
                                    as="select"
                                    size="sm"
                                    options={[
                                        {value: "m", title: "Мужчина"},
                                        {value: "f", title: "Женщина"}
                                    ]}
                                >
                                    Ваш пол
                                </FormikGroup>
                                <FormikGroup name="phone" onChange={handleChange} value={values.phone} size="sm">
                                    Номер телефона
                                </FormikGroup>
                                <AddressForm getFieldProps={getFieldProps}/>
                                <Button type="submit" disabled={isSubmitting || isValidating}>
                                    Сохранить
                                </Button>
                            </Form>
                        )}
                        {/* avatar */}
                    </Formik>
                </Col>
                <Col md={4} sm={6}>
                    <h6 className="text-md mt-4 mt-sm-0">Защита</h6>
                    <Formik
                        initialValues={passwordInitialValues}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            updatePasswordHandler(values)
                                .then(res => {

                                })
                                .catch(err => console.log(err))
                                .finally(() => {
                                    setSubmitting(false);
                                });
                        }}
                        validationSchema={object({
                            email: string().email(),
                            curPassword: string()
                                .min(8)
                                .max(20),
                            newPassword: string()
                                .min(8)
                                .max(20),
                            repPassword: string()
                                .min(8)
                                .max(20)
                        })}
                    >
                        {({values, handleChange, handleSubmit, isSubmitting, isValidating}) => (
                            <Form onSubmit={handleSubmit}>
                                <FormikGroup
                                    name="email"
                                    onChange={null}
                                    autoComplete="username"
                                    value={userData.email}
                                    type="email"
                                    size="sm"
                                    disabled
                                >
                                    Эл. почта
                                </FormikGroup>
                                <FormikGroup
                                    name="curPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={values.curPassword}
                                    size="sm"
                                >
                                    Текущий пароль
                                </FormikGroup>
                                <FormikGroup
                                    name="newPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={values.newPassword}
                                    size="sm"
                                >
                                    Новый пароль
                                </FormikGroup>
                                <FormikGroup
                                    name="repPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={handleChange}
                                    value={values.repPassword}
                                    size="sm"
                                >
                                    Подтвердите пароль
                                </FormikGroup>

                                <Button type="submit" disabled={isSubmitting || isValidating}>
                                    Сохранить
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </ProfileLayout>
    );
};

export const getServerSideProps = async ({req}) => {
    let res = null;
    let error = null;
    try {
        res = await axios.get("/profile", {
            headers: {
                Authorization: `Bearer ${parseCookies(req).token}`
            }
        });
        res = res.data;
    } catch (err) {
        error = "Error";
        return {
            props: {
                error
            }
        };
    }

    return {
        props: {
            userData: res
        }
    };
};
export default SettingsPage;
