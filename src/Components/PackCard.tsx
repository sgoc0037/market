import React, { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addToBasket } from "../Reducers/BasketSlice"
import { basketMain, basketStateType } from "../Types/BasketSliceType"
import { devicesType } from "../Types/ProductsSliceType"
import { DeviceCard } from "./DeviceCard"
import style from './Styles/PackCard.module.css'

interface packCardType {
    data: Array<devicesType> | Array<basketMain>
    removeProduct?: (value: string) => void
    addAmount?: (value: basketStateType) => void
}

export const PackCard: FC<packCardType> = (props) => {

    const basket = useAppSelector(state => state.basket.basket)
    const [value, setValue] = useState<devicesType>()
    const dispatch = useAppDispatch()

    const guardianForBasket = (data: devicesType) => {
        let preparation = basket.find(item => item.id === value?.id)

        if (!preparation) {
            dispatch(addToBasket(data))
        }
    }

    useEffect(() => {
        value &&
            guardianForBasket(value)
    }, [value])

    return <div className={style.packCard}>
        {props.data.map((item) => {
            return <DeviceCard
                key={item.id}
                data={item}
                setValue={setValue}
                removeProduct={props.removeProduct}
                addAmount={props.addAmount}

            />
        })
        }
    </div>
}
