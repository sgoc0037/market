import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';
import { Admin } from '../pages/Admin';
import { Auth } from '../pages/Auth';
import { Basket } from '../pages/Basket';
import { Theme } from '../pages/Theme';
import { Shop } from '../pages/Shop';
import { path } from '../Types/RoutesType';

export const AppRouter = () => {

    const isAuth = useAppSelector(state=> state.isAuth.isAuth)

    return <div>
        <Routes>
            {isAuth &&
                <>
                    <Route path={path.ADMIN} element={<Admin />} />
                    <Route path={path.BASKET} element={<Basket />} />
                </>
            }
            {!isAuth &&
                <>
                    <Route path={path.SHOP} element={<Shop />} />
                    <Route path={path.REGISTRATION} element={<Auth />} />
                    <Route path={path.LOGIN} element={<Auth />} />
                    <Route path={path.THEME} element={<Theme />} />
                </>
            }
        </Routes>
    </div>
}