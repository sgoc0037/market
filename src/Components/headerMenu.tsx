import React from 'react';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { path } from '../Types/RoutesType';
import { getItem } from '../util/util';
import { Header } from 'antd/lib/layout/layout';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setAuth } from '../Reducers/AuthSlice';

type MenuItem = Required<MenuProps>['items'][number];

export const HeaderMenu: React.FC = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch(setAuth(false))
    }


    const items: MenuItem[] = isAuth
        ? [
            getItem(<Link to={path.ADMIN}>Admin</Link>, '1'),
            getItem(<Link to={path.PRODUCTS}>Products</Link>, '3'),
            getItem(<Link to={path.BASKET}>Basket</Link>, '4'),
            getItem(<Button onClick={logoutHandler} type='primary'>Выйти</Button>, 'logout')
        ]
        : [
            getItem(<Link to={path.LOGIN}>Login</Link>, '2'),
            getItem(<Link to={path.PRODUCTS}>Products</Link>, '3'),
        ]

    return (
        <Header>
            <Menu
                mode="horizontal"
                theme="dark"
                items={items}
            />
        </Header>
    );
};