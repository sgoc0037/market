import { mainThemeType } from './../Types/ThemeSliceType';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsSliceType } from '../Types/ThemeSliceType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: productsSliceType = {
    themeType: [
        { id: 1, name: 'Nature' },
        { id: 2, name: 'Games' },
        { id: 3, name: 'Streets' },
    ],
    games: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
    ],
    nature: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
    ],
    streets: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
    ]
}

const ProductsSlice = createSlice({
    initialState,
    name: 'Products',
    reducers: {
        setNature: (state,action:PayloadAction<mainThemeType>)=> {
            state.nature.push(action.payload)
        },
        setGames: (state,action:PayloadAction<mainThemeType>)=> {
            state.games.push(action.payload)
        },
        setStreets: (state,action:PayloadAction<mainThemeType>)=> {
            state.streets.push(action.payload)
        }
    }
})