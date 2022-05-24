import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';
import { Admin } from '../pages/Admin';
import { Auth } from '../pages/Auth';
import { Basket } from '../pages/Basket';
import { Products } from '../pages/Products';
import { Shop } from '../pages/Shop';
import { path } from '../Types/RoutesType';

export const AppRouter = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)
    const device = useAppSelector(state => state.products.devices)

    return <div>
        <Routes>
            <Route path='/' element={<Auth />} />
            {isAuth &&
                <>
                    <Route path={path.ADMIN} element={<Admin />} />
                    <Route path={path.BASKET} element={<Basket />} />
                </>
            }
            {!isAuth &&
                <>
                    <Route path={path.REGISTRATION} element={<Auth />} />
                    <Route path={path.LOGIN} element={<Auth />} />
                    <Route path={path.PRODUCTS} element={<Products />} />
                    <Route path={`${path.PRODUCTS}/:name`} element={<Shop />} />
                </>
            }
            <Route path='*' element={<Auth />} />
        </Routes>
    </div>
}