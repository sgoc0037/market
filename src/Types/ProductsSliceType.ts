
export interface mainProductsType {
    id: string
    name: string
}

export interface devicesType extends mainProductsType {
    price: number
    img: string
    brand: string
    type: string
    [index: string]: string | number
}

export interface productsSliceType {
    productsType: Array<mainProductsType>
    brands: Array<mainProductsType>
    devices: Array<devicesType>
}