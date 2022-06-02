import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { PackCard } from '../Components/PackCard'
import { changeAmount } from '../Reducers/BasketSlice'
import { basketStateType } from '../Types/BasketSliceType'
import { getIndex } from '../util/util'

export const Basket = () => {

    const basket = useAppSelector(state => state.basket.basket)
    const devices = useAppSelector(state => state.products.devices)

    const dispatch = useDispatch()

    const [value, setValue] = useState<basketStateType>()

    useEffect(() => {
        if (value) {
            const index = getIndex(devices, value.id)
            dispatch(changeAmount({ ...value, index }))
        }
    }, [value])

    return <div>
        {basket.length === 0
            ? <span>Тут пусто</span>
            : <PackCard props={basket} addAmount={setValue} />}
    </div>
}