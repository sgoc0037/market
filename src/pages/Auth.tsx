import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setAuth } from '../Reducers/AuthSlice'

export const Auth = () => {

    const isAuth = useAppSelector(state => state.isAuth.isAuth)
    const dispatch = useAppDispatch()

    const handlerForAuth = () => dispatch(setAuth(!isAuth))

    return <div>
        <span>{isAuth}</span>
        <button onClick={handlerForAuth}> Click and change state auth.</button>
    </div>
}