import { Menu, MenuProps } from 'antd'
import React, { FC } from 'react'
import { mainProductsType } from '../Types/ProductsSliceType';
import { getItem } from '../util/util';

interface productsMenuType {
    arr: Array<mainProductsType>
    currentValue: string
    filterChange: (value: string) => void
    mode: 'horizontal' | 'vertical'
}

export const ProductsMenu: FC<productsMenuType> = ({arr,currentValue,filterChange,mode}) => {

    const items: MenuProps['items'] = arr.map(({ name }) => {
        return getItem(name, name)
    })

    const menuHandler: MenuProps['onClick'] = (e) => {
        filterChange(e.key)
    }

    return <Menu
        items={items}
        mode={mode}
        onClick={menuHandler}
        defaultSelectedKeys={['0']}
        selectedKeys={[currentValue]}
    />
}