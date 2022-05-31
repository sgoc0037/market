import React from 'react'
import { useAppSelector } from '../app/hooks'
import { PackCard } from '../Components/PackCard'

export const Basket = () => {

    const basket = useAppSelector(state => state.basket.basket)

    return <div>
        {basket.length === 0 ? <span>Тут пусто</span> : <PackCard props={basket} />}
    </div>
}