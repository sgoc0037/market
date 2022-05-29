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

    let filterForDevices = (value: string, attr: string): Array<devicesType> => {
        if (attr === 'type') {
            return devices.filter((item: devicesType) => {
                if (item.type === value)
                    return item
            })
        } else if (attr === 'brand') {
            return devices.filter((item: devicesType) => {
                if (item.brand === value)
                    return item
            })
        }
        return []
    }

    const [value, setValue] = useState<string>(String(productsType[0].name))

    const items: MenuProps['items'] = productsType.map(({ name }) => {
        return getItem(name, name)
    })


    const menuHandler: MenuProps['onClick'] = (e) => {
        setValue(e.key)
        setCurrentDevices(filterForDevices(e.key,'type'))
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