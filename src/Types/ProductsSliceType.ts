
export interface mainProductsType {
    id: number
    name: string
}

export interface devicesType extends mainProductsType {
    price: number
    img?: string
}

export interface productsSliceType {
    productsType: Array<mainProductsType>
    brands: Array<mainProductsType>
    devices: Array<devicesType>
}