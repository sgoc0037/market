import { InputNumber } from "antd";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeAmount } from "../Reducers/BasketSlice";
import { getIndex } from "../util/util";

interface AmountType {
    id: string
    amount: number
}

export const Amount: FC<AmountType> = ({ id, amount }) => {

    const basket = useAppSelector(state => state.basket.basket)
    const dispatch = useAppDispatch()

    const changeHandler = (value:number) => {
        const index = getIndex(basket, id)
        dispatch(changeAmount({ index, id, amount: value }))
    }

    return <InputNumber min={0} value={amount} onChange={changeHandler} />
}