import { devicesType } from '../Types/ProductsSliceType';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsSliceType } from '../Types/ProductsSliceType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: productsSliceType = {
    productsType: [
        { id: 1, name: 'Холодильники' },
        { id: 2, name: 'Смартфоны' }
    ],
    brands: [
        { id: 1, name: 'Samsung' },
        { id: 1, name: 'Apple' },
    ],
    devices: [
        { id: 1, name: 'dasdasdas', price: 25000, img: 'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470' },
        { id: 2, name: 'waswaswas', price: 25000, img: 'https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470' },
    ]
}

const ProductsSlice = createSlice({
    initialState,
    name: 'Products',
    reducers: {
        setDevices: (state, action: PayloadAction<devicesType>) => {
            state.devices.push(action.payload)
        }
    }
})


export const { setDevices } = ProductsSlice.actions
export default ProductsSlice.reducer