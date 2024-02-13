import React, {useState} from 'react';
import {
    Form,
    Button,
    Input,
    Row,
    Col,
    message,
} from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import {useHistory, useLocation} from "react-router-dom";

const UserSettings = () => {
    const location = useLocation();
    const history = useHistory();
    const {name, email, username, phone, website, address} = location.state;
    const [state, setState] = useState({
        name,
        email,
        userName: username,
        phoneNumber: phone,
        website,
        address: address.street,
        city: address.city,
        postcode: address.zipcode,
    })

    const onFinish = (values) => {
        const key = 'updatable';
        message.loading({ content: 'Сохранение...', key });
        setTimeout(() => {
            setState({
                name: values.name,
                email: values.email,
                userName: values.userName,

                phoneNumber: values.phoneNumber,
                website: values.website,
                address: values.address,
                city: values.city,
                postcode: values.postcode,
            });
            message.success({ content: 'Выполнено!', key, duration: 2 });
            history.push({
                pathname: '/app/commons/clients/list',
            });
        }, 1000);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={state}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={16}
                        >
                            <Row gutter={ROW_GUTTER}>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Имя"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Никнейм"
                                        name="userName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Электронная почта"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Телефонный номер"
                                        name="phoneNumber"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Веб-сайт"
                                        name="website"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={24}
                                >
                                    <Form.Item
                                        label="Улица"
                                        name="address"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Город"
                                        name="city"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                >
                                    <Form.Item
                                        label="Почтовый индекс"
                                        name="postcode"
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                Сохранить изменения
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default UserSettings;