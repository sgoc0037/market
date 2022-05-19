import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Admin } from '../pages/Admin';
import { Auth } from '../pages/Auth';
import { Basket } from '../pages/Basket';
import { Products } from '../pages/Products';
import { Shop } from '../pages/Shop';
import { path } from '../Types/RoutesType';

export const AppRouter = () => {

    const [isAuth, setIsAuth] = useState < boolean > (false);
    const handlerForAuth = () => setIsAuth(!isAuth)

    return <div>
        <button onClick={handlerForAuth}> Click and change state auth.</button>
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
                    <Route path={path.PRODUCTS} element={<Products />} />
                </>
            }
        </Routes>
    </div>
}