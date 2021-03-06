import React, { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addToBasket } from "../../Reducers/BasketSlice"
import { devicesType } from "../../Types/ProductsSliceType"
import { DeviceCard } from "./DeviceCard"
import style from './PackCard.module.css'

interface packCardType {
    data: Array<devicesType>
    removeProduct?: (value: string) => void
}

export const PackCard: FC<packCardType> = (props) => {

    const basket = useAppSelector(state => state.basket.basket)
    const [value, setValue] = useState<devicesType>()
    const dispatch = useAppDispatch()

    useEffect(() => {

        const preparation = value ? basket.find(item => item.id === value.id) : null;

        if (!preparation) {
            value &&
                dispatch(addToBasket(value))
        }
    }, [value])

    return <div className={style.packCard}>
        {props.data.map((item) => {
            return <DeviceCard
                key={item.id}
                data={item}
                setValue={setValue}
                removeProduct={props.removeProduct}
            />
        })
        }
    </div>
}
