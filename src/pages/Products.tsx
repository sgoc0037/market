import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { Brands } from '../Components/BrandsMenu';
import { getItem } from '../util/util';

export const Products = () => {

    const productsType = useAppSelector(state => state.products.productsType)


    const [value, setValue] = useState<string>(String(productsType[0].id))

    const items: MenuProps['items'] = productsType.map(({ name, id }) => {
        return getItem(name, id)
    })


    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
    }

    return <div style={{display: 'flex'}}>
        <Menu
            mode='vertical'
            items={items}
            onClick={menuHandler}
            defaultSelectedKeys={['0']}
            selectedKeys={[value]}
        />
        <Brands />
    </div>
}