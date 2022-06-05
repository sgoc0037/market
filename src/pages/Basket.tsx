import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../app/hooks'
import { CardBasket } from '../Components/Cards/CardForBasket'
import { changeAmount } from '../Reducers/BasketSlice'
import { basketStateType } from '../Types/BasketSliceType'
import { getIndex } from '../util/util'
import style from './Styles/Basket.module.css'

export const Basket = () => {


    const basket = useAppSelector(state => state.basket.basket)
    const devices = useAppSelector(state => state.products.devices)

    const dispatch = useDispatch()
    
    const [value, setValue] = useState<basketStateType>()
    const [totalAmount, setTotalAmount] = useState<number>(0)

    useEffect(() => {
        if (value) {
            const index = getIndex(devices, value.id)
            dispatch(changeAmount({ ...value, index }))
        }
    }, [value])

    useEffect(() => {

        if (basket.length > 1) {
            const answer = basket.map((item) => item.price * item.amount)
                .reduce((x, y) => x + y)
            setTotalAmount(answer)
        } else if (basket.length === 1) {
            setTotalAmount(basket[0].price * basket[0].amount)
        }

    }, [basket])

    return <div className={style.basket}>
        {basket.length === 0 &&
            < span > Тут пусто</span>
        }
        {basket.length > 0 &&
            <>
                {basket.map(item => {
                    return <CardBasket addAmount={setValue} data={item} key={item.id} />
                })}
                <span className={style.basket__total}
                >Сумма всей корзины: <b>{totalAmount}</b></span>
            </>
        }
    </div>
}