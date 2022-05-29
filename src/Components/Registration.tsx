import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { formDataType } from "../Types/AuthType";
import style from './Styles/Registration.module.css'

interface RegistrationType {
    onFinish: (data: formDataType) => void
}

export const Registration: FC<RegistrationType> = ({
    onFinish
}) => {

    const [form] = Form.useForm();

    const onSubmit = (formData: formDataType) => {
        onFinish(formData)
    }

    return <Form
        className={style.registration}
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        name="Form_for_registration"
    >
        <Form.Item
            className={style.registration__input}
            name='login'
            label="Логин"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            className={style.registration__input}
            name='password'
            label="Пароль"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input type='password' />
        </Form.Item>
        <Form.Item
            className={style.registration__input}
            name='mail'
            label="Почта"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>

}