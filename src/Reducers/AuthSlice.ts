import { authSliceType } from './../Types/AuthSliceType';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: authSliceType = {
    isAuth: true,
    users: {}
}

const AuthSlice = createSlice({
    initialState,
    name: 'AuthSlice',
    reducers: {
        setAuth: (state, action:PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setUsers: (state, action:PayloadAction<object>) => {
            state.users = action.payload
        }
    }
})

export const { setAuth, setUsers } = AuthSlice.actions
export default AuthSlice.reducer