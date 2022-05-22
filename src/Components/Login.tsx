import { Button, Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAppDispatch } from '../app/hooks';
import { setAuth } from '../Reducers/AuthSlice';

export const Login = () => {

    const dispatch = useAppDispatch()

    const onFinish = (values: string) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: object) => {
        console.log('Failed:', errorInfo);
    };

    const handlerChange = (e: CheckboxChangeEvent) => {
        dispatch(setAuth(e.target.checked))
    }

    return <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Checkbox onChange={handlerChange}>Click me for auth.</Checkbox>
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}
