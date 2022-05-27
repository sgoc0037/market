import { mainProductsType } from './ProductsSliceType';
export enum modeForm {
    NEWCATEGORY = 'NewCategory',
    NEWBRAND = 'NewBrand',
    NEWPRODUCT = 'NewProduct'
}

export interface formData extends mainProductsType {
    description?: string
    modeForm: modeForm
    price: number
}