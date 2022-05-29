import { Button, Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useAppDispatch } from '../app/hooks';
import { setAuth } from '../Reducers/AuthSlice';
import style from './Styles/auth.module.css'


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
        className={style.auth}
        name="basic"
        labelCol={{
            span: 6,
        }}
        wrapperCol={{
            span: 12,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Checkbox style={{padding: '4px 11px'}} onChange={handlerChange}>Click me for auth.</Checkbox>
        <Form.Item
            className={style.auth__item}
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
            className={style.auth__item}
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
            className={style.auth__item}
            name="remember"
            valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
}
