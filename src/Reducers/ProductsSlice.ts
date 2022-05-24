import { devicesType } from '../Types/ProductsSliceType';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsSliceType } from '../Types/ProductsSliceType';
import { createSlice } from '@reduxjs/toolkit';
import { image } from '../util/util';

const initialState: productsSliceType = {
    productsType: [
        { id: 0, name: 'Любой' },
        { id: 1, name: 'Холодильники' },
        { id: 2, name: 'Смартфоны' }
    ],
    brands: [
        { id: 0, name: 'Любой' },
        { id: 1, name: 'Samsung' },
        { id: 2, name: 'Apple' },
    ],
    devices: [
        { id: 1, name: 'dasdasdas', price: 25000, img: image },
        { id: 2, name: 'waswaswas', price: 25000, img: image },
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