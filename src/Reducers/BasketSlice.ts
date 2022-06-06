import { devicesType } from './../Types/ProductsSliceType';
import { basketSliceType, changeAmountType } from './../Types/BasketSliceType';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: basketSliceType = {
    basket: []
}

const BasketSlice = createSlice({
    initialState,
    name: 'Basket',
    reducers: {
        addToBasket: (state, action: PayloadAction<devicesType>) => {
            const amount = 1
            state.basket.push({ ...action.payload, amount })
        },
        deleteFromBasket: (state, action: PayloadAction<number>) => {
            state.basket.splice(action.payload, 1)
        },
        changeAmount: (state, action: PayloadAction<changeAmountType>) => {
            state.basket[action.payload.index].amount = action.payload.amount
        }
    }
})

export const { addToBasket, deleteFromBasket, changeAmount } = BasketSlice.actions
export default BasketSlice.reducer