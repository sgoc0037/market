import { Shop } from './../pages/Shop';
import { Basket } from './../pages/Basket';
import { Admin } from '../pages/Admin';
import { pathType, RouteType } from './../Types/RoutesType';
import { Auth } from '../pages/Auth';
import { Products } from '../pages/Products';


const authRoutes: Array<RouteType> = [
    {
        path: pathType.ADMIN,
        Component: Admin
    },
    {
        path: pathType.BASKET,
        Component: Basket
    }
]

const publicRoutes: Array<RouteType> = [
    {
        path: pathType.SHOP,
        Component: Shop
    },
    {
        path: pathType.LOGIN,
        Component: Auth
    },
    {
        path: pathType.REGISTRATION,
        Component: Auth
    }
]