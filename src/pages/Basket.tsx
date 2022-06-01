import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { PackCard } from '../Components/PackCard'
import { changeAmount } from '../Reducers/BasketSlice'
import { changeAmountType } from '../Types/BasketSliceType'

export const Basket = () => {

    const basket = useAppSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    const [value,setValue] = useState<changeAmountType>()

    useEffect(()=> {
        value &&    
            dispatch(changeAmount(value))
    },[value])

    return <div>
        {basket.length === 0 ? <span>Тут пусто</span> : <PackCard props={basket} addAmount={setValue}/>}
    </div>
}