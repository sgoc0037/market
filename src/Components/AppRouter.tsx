import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';
import { Admin } from '../pages/Admin/Admin';
import { Auth } from '../pages/Auth/Auth';
import { Basket } from '../pages/Basket/Basket';
import { Default } from '../pages/Default/Default';
import { Products } from '../pages/Products/Products';
import { Shop } from '../pages/Shop/Shop';
import { path } from '../Types/RoutesType';
import { DeleteFormForAdmin } from '../pages/Admin/DeleteFormForAdmin';

export const AppRouter = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)

    return <>
        <Routes>
            <Route path='/' element={<Default />} />
            {isAuth &&
                <>
                    <Route path={path.ADMIN} element={<Admin />} />
                    <Route path={path.BASKET} element={<Basket />} />
                    <Route path={`${path.BASKET}/:name`} element={<Shop />} />
                    <Route path={path.PRODUCTS} element={<Products />} />
                    <Route path={`${path.PRODUCTS}/:name`} element={<Shop />} />
                    <Route path={path.DELETE} element={<DeleteFormForAdmin />} />
                </>
            }
            {!isAuth &&
                <>
                    <Route path={path.LOGIN} element={<Auth />} />
                    <Route path={path.PRODUCTS} element={<Products />} />
                    <Route path={`${path.PRODUCTS}/:name`} element={<Shop />} />
                </>
            }
            <Route path='*' element={<Auth />} />
        </Routes>
    </>
}