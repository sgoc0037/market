import { authSliceType } from './../Types/AuthSliceType';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: authSliceType = {
    isAuth: true
}

const AuthSlice = createSlice({
    initialState,
    name: 'AuthSlice',
    reducers: {
        setAuth: (state, action:PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
})

export const { setAuth } = AuthSlice.actions
export default AuthSlice.reducer