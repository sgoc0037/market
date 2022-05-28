import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { path } from '../Types/RoutesType';
import { getItem } from '../util/util';
import { Header } from 'antd/lib/layout/layout';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    getItem(<Link to={path.ADMIN}>Admin</Link>, '1'),
    getItem(<Link to={path.LOGIN}>Login</Link>, '2'),
    getItem(<Link to={path.PRODUCTS}>Products</Link>, '3'),
];

export const HeaderMenu: React.FC = () => {

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