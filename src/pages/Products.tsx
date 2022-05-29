import { Menu, MenuProps } from 'antd'
import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { Brands } from '../Components/BrandsMenu';
import { PackCard } from '../Components/PackCard';
import { devicesType } from '../Types/ProductsSliceType';
import { getItem } from '../util/util';
import style from './Styles/Products.module.css'


export const Products = () => {

    const productsType = useAppSelector(state => state.products.productsType)
    const devices = useAppSelector(state => state.products.devices)

    const [currentDevices, setCurrentDevices] = useState<Array<devicesType>>(devices)

    let filterForDevices = (value: string): Array<devicesType> => {
        return devices.filter((item: devicesType) => {
            if (item.type === value)
                return item
        })
    }

    const [value, setValue] = useState<string>(String(productsType[0].name))

    const items: MenuProps['items'] = productsType.map(({ name }) => {
        return getItem(name, name)
    })


    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
        setCurrentDevices(filterForDevices(e.key))
    }

    return <div className={style.products}>
        <Menu className={style.products__menu}
            mode='vertical'
            items={items}
            onClick={menuHandler}
            defaultSelectedKeys={['0']}
            selectedKeys={[value]}
        />
        <Brands />
        <PackCard props={currentDevices} />
    </div>
}