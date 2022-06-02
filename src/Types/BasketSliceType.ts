import { devicesType } from './ProductsSliceType';

export interface basketMain extends devicesType {
    amount: number
}

export interface basketSliceType {
    basket: Array<basketMain>
}

export interface basketStateType {
    id: string
    amount: number
}

export interface changeAmountType extends basketStateType {
    index: number
}