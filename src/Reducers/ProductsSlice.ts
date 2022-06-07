import { removeDeviceType } from './../Types/ProductsSliceType';
import { devicesType, mainProductsType } from '../Types/ProductsSliceType';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsSliceType } from '../Types/ProductsSliceType';
import { createSlice } from '@reduxjs/toolkit';
import { image } from '../util/util';

const initialState: productsSliceType = {
    productsType: [
        { id: '0', name: 'Любой' },
        { id: '1', name: 'Холодильники' },
        { id: '2', name: 'Смартфоны' }
    ],
    brands: [
        { id: '0', name: 'Любой' },
        { id: '1', name: 'Samsung' },
        { id: '2', name: 'Apple' },
    ],
    devices: [
        {
            id: '1',
            name: 'dasdasdas',
            price: 25000,
            img: image,
            brand: 'Samsung',
            type: 'Холодильники'
        },
        {
            id: '2',
            name: 'applemakentosh',
            price: 312515,
            img: image,
            brand: 'Apple',
            type: 'Смартфоны'
        },
    ]
}

const ProductsSlice = createSlice({
    initialState,
    name: 'Products',
    reducers: {
        addProductsType: (state, action: PayloadAction<mainProductsType>) => {
            state.productsType.push(action.payload)
        },
        addBrands: (state, action: PayloadAction<mainProductsType>) => {
            state.brands.push(action.payload)
        },
        setDevices: (state, action: PayloadAction<devicesType>) => {
            if (action.payload.img.length === 0) {
                action.payload.img = image
            }
            state.devices.push(action.payload)
        },
        removeDevice: (state, action: PayloadAction<removeDeviceType>) => {
            state.devices.splice(action.payload.index, 1)
        },
        setProductsType: (state, action:PayloadAction<Array<mainProductsType>>) => {
            state.productsType = action.payload
        },
        setBrands: (state, action:PayloadAction<Array<mainProductsType>>) => {
            state.brands = action.payload
        }
    }
})


export const { addBrands, addProductsType, setProductsType,
     setBrands, setDevices, removeDevice } = ProductsSlice.actions
export default ProductsSlice.reducer