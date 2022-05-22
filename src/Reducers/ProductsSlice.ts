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
        { id: 1, name: 'dasdasdas', price: 25000, img: '' },
        { id: 2, name: 'waswaswas', price: 25000, img: '' },
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