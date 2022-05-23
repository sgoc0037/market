import { Card, Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { getItem } from '../util/util';

export const Products = () => {

    const productsType = useAppSelector(state => state.products.productsType)


    const [menuType, setMenuType] = useState<number>(productsType[0].id)

    type MenuItem = Required<MenuProps>['items'][number];
    const items: MenuItem[] = productsType.map(({name,id})=> {
        return getItem(name,id)
    })


    const menuHandler: MenuProps['onClick'] = (e) => {
        setMenuType(+e.key)
    }

    return <>

        <Menu
            mode='horizontal'
            items={items}
            onClick={menuHandler}
            selectedKeys={['1']} />
    </>
}