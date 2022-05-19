export interface RouteType {
    path: pathType,
    Component: React.FC
}

export enum pathType {
    ADMIN = 'admin',
    LOGIN = 'login',
    REGISTRATION = 'registration',
    SHOP = 'shop',
    BASKET = 'basket',
    PRODUCTS = 'products'
}