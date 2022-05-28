import { Button, Form, Input } from "antd";
import React, { FC } from "react";

interface RegistrationType {
    onFinish: (data: any) => void
}

export const Registration: FC<RegistrationType> = ({
    onFinish
}) => {

    const [form] = Form.useForm();

    const onSubmit = (data: { [index: string]: string }) => {
        console.log(data)
    }

    return <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        name="Form_for_registration"
    >
        <Form.Item
            name='login'
            label="Логин"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name='password'
            label="Пароль"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input type='password' />
        </Form.Item>
        <Form.Item
            name='mail'
            label="Почта"
            rules={[{ required: true, message: 'Обязательное поле' }]}
        >
            <Input type='ma' />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>

}