import { devicesType, mainProductsType } from './ProductsSliceType';

export enum modeForm {
    NEWCATEGORY = 'NewCategory',
    NEWBRAND = 'NewBrand',
    NEWPRODUCT = 'NewProduct'
}

export interface formData extends mainProductsType {
    modeForm: modeForm
    newProduct?: devicesType
}

export interface editData {
    [index: string] : Array<string>
}