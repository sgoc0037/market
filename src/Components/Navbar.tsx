import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { path } from '../Types/RoutesType';
import { getItem } from '../util/util';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    getItem(<Link to={path.ADMIN}>Admin</Link>, '1', <PieChartOutlined />),
    getItem(<Link to={path.LOGIN}>Login</Link>, '2', <PieChartOutlined />),
    getItem(<Link to={path.PRODUCTS}>Products</Link>, '3', <PieChartOutlined />),
];

export const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};