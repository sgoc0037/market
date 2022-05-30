import React from 'react'
import { useAppSelector } from '../app/hooks'
import { PackCard } from '../Components/PackCard'

export const Basket = ()=> {

    const basket = useAppSelector(state=> state.basket.basket)

    console.log(basket)
    return <div>
        <PackCard props={basket}/>
    </div>
}