import { authSliceType } from './../Types/AuthSliceType';
import { createSlice } from "@reduxjs/toolkit";

const initialState: authSliceType = {
    auth: false
}

const AuthSlice = createSlice({
    initialState,
    name: 'AuthSlice',
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload
        }
    }
})

export const { setAuth } = AuthSlice.actions
export default AuthSlice.reducer