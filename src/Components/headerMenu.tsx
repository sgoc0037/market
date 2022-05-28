import React from 'react';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { path } from '../Types/RoutesType';
import { getItem } from '../util/util';
import { Header } from 'antd/lib/layout/layout';
import { useAppSelector } from '../app/hooks';
import { useEffect } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

export const HeaderMenu: React.FC = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)

    const items: MenuItem[] = [
        getItem(<Link to={path.ADMIN}>Admin</Link>, '1'),
        getItem(<Link to={path.LOGIN}>Login</Link>, '2'),
        getItem(<Link to={path.PRODUCTS}>Products</Link>, '3'),
    ];

    isAuth && items.push(getItem(<Button type='primary'>Выйти</Button>, 'logout'))

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