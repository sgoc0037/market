import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthSlice from '../Reducers/AuthSlice';
import ProductsSlice from '../Reducers/ProductsSlice';

export const store = configureStore({
  reducer: {
    isAuth : AuthSlice,
    products: ProductsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
