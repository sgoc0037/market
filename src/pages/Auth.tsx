import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { Login } from '../Components/Login';
import { Registration } from '../Components/Registration';
import { getItem } from '../util/util';

export const Auth = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)
    
    const auth = isAuth ? 'login' : 'registration'

    const [value, setValue] = useState<string>(auth)

    const onFinish = (data: any) => {
        console.log(data)
    }

    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
    }

    const items: MenuProps['items'] = [
        getItem('Авторизация', 'login'),
        getItem('Регистрация', 'registration')
    ]

    return (<div>
        <Menu
            mode='horizontal'
            items={items}
            onClick={menuHandler}
            selectedKeys={[value]}
        />
        {value === 'login' ? <Login /> : <Registration onFinish={onFinish} />}
    </div>
    );
};