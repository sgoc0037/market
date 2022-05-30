import { Menu, MenuProps } from 'antd'
import React, { FC, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { getItem } from '../util/util';
import style from './Styles/BrandsMenu.module.css'

interface brandType {
    brandHandler: (value: string) => void;
}

export const Brands: FC<brandType> = ({ brandHandler }) => {

    const brands = useAppSelector(state => state.products.brands)

    const [value, setValue] = useState<string>(String(brands[0].name))

    const items: MenuProps['items'] = brands.map(({ name }) => {
        return getItem(name, name)
    })

    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
        brandHandler(e.key)
    }

    return <Menu
        className={style.brands}
        items={items}
        mode='horizontal'
        onClick={menuHandler}
        defaultSelectedKeys={['0']}
        selectedKeys={[value]}
    />
}