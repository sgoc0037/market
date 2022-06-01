import { devicesType } from './../Types/ProductsSliceType';
import { basketSliceType, basketMain, changeAmountType } from './../Types/BasketSliceType';

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
            state.basket.push({...action.payload,amount})
        },
        changeAmount: (state, action: PayloadAction<changeAmountType>) => {
            console.log(action.payload)
        }
    }
})

export const { addToBasket,changeAmount } = BasketSlice.actions
export default BasketSlice.reducer