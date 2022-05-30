import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthSlice from '../Reducers/AuthSlice';
import BasketSlice from '../Reducers/BasketSlice';
import ProductsSlice from '../Reducers/ProductsSlice';

export const store = configureStore({
  reducer: {
    isAuth : AuthSlice,
    products: ProductsSlice,
    basket: BasketSlice
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
