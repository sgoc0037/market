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
            const preparation: basketMain = {
                deviceToBasket: action.payload,
                amount: 1
            }
            state.basket.push(preparation)
        },
        changeAmount: (state, action: PayloadAction<changeAmountType>) => {
            const preparation:Array<basketMain> = state.basket.filter((item: basketMain) => {
                return item.deviceToBasket.id === action.payload.id
            })
            preparation[0].amount = action.payload.amount
        }
    }
})

export const { addToBasket } = BasketSlice.actions
export default BasketSlice.reducer