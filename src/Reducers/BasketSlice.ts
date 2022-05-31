import { devicesType } from './../Types/ProductsSliceType';
import { createSlice } from '@reduxjs/toolkit';

interface basketSliceType {
    basket: Array<devicesType>
}

const initialState:basketSliceType = {
    basket: []
}


const BasketSlice = createSlice({
    initialState,
    name: 'Basket',
    reducers: {
        addToBasket: (state, action) => {
            state.basket.push(action.payload)
        }
    }
})

export const { addToBasket } = BasketSlice.actions
export default BasketSlice.reducer