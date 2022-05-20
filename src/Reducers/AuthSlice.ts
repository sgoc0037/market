import { authSliceType } from './../Types/AuthSliceType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: authSliceType = {
    isAuth: false,
    users: {}
}

const AuthSlice = createSlice({
    initialState,
    name: 'AuthSlice',
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { setAuth, setUsers } = AuthSlice.actions
export default AuthSlice.reducer