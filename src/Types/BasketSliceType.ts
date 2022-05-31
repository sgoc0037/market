import { devicesType } from './ProductsSliceType';

export interface basketMain {
    deviceToBasket: devicesType
    amount: number
}

export interface basketSliceType {
    basket: Array<basketMain>
}

export interface changeAmountType {
    id: string
    amount: number
}