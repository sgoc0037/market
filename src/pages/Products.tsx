import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { ProductsMenu } from '../Components/ProductsMenu';
import { PackCard } from '../Components/Cards/PackCard';
import { devicesType } from '../Types/ProductsSliceType';
import style from './Styles/Products.module.css'

type attr = 'type' | 'brand'

export const Products = () => {

    const productsType = useAppSelector(state => state.products.productsType)
    const brands = useAppSelector(state => state.products.brands)
    const devices = useAppSelector(state => state.products.devices)

    const [currentDevices, setCurrentDevices] = useState<Array<devicesType>>(devices)

    const [one, setOne] = useState<string>(String(productsType[0].name))
    const [second, setSecond] = useState<string>(String(devices[0].name))

    let filterForDevices = (value: string, attr: attr): Array<devicesType> => {
        if (value === 'Любой') {
            return devices
        }
        return devices.filter((item: devicesType) => item[attr] === value)
    }

    const productHandler = (value: string) => {
        setCurrentDevices(filterForDevices(value, 'type'))
        setOne(value)
        setSecond(brands[0].name)
    }

    const brandHandler = (value: string) => {
        setCurrentDevices(filterForDevices(value, 'brand'))
        setSecond(value)
        setOne(productsType[0].name)
    }

    return <div className={style.products}>
        <div className={style.products__product}>
            <ProductsMenu
                arr={productsType}
                currentValue={one}
                filterChange={productHandler}
                mode='vertical'
            />
        </div>
        <div className={style.products__brand}>
            <ProductsMenu
                arr={brands}
                currentValue={second}
                filterChange={brandHandler}
                mode='horizontal'
            />
        </div>
        <PackCard data={currentDevices} />
    </div>
}