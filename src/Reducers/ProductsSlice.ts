import { devicesType, mainProductsType } from '../Types/ProductsSliceType';
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
        { id: 3, name: 'waswaswas', price: 25000, img: image },
        { id: 4, name: 'waswaswas', price: 25000, img: image },
        { id: 5, name: 'waswaswas', price: 25000, img: image },
        { id: 6, name: 'waswaswas', price: 25000, img: image },
    ]
}

const ProductsSlice = createSlice({
    initialState,
    name: 'Products',
    reducers: {
        setProductsType: (state, action: PayloadAction<mainProductsType>) => {
            state.productsType.push(action.payload)
        },
        setBrands: (state, action: PayloadAction<mainProductsType>) => {
            state.brands.push(action.payload)
        },
        setDevices: (state, action: PayloadAction<devicesType>) => {
            state.devices.push(action.payload)
        }
    }
})


export const { setProductsType, setBrands, setDevices } = ProductsSlice.actions
export default ProductsSlice.reducer