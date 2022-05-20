import { mainThemeType } from './../Types/ThemeSliceType';
import { PayloadAction } from '@reduxjs/toolkit';
import { productsSliceType } from '../Types/ThemeSliceType';
import { createSlice } from '@reduxjs/toolkit';
import nature from '../image/nature.jpg'

interface setActionPayload {
    name: string
    img: string
}

const initialState: productsSliceType = {
    themeType: [
        { id: 1, name: 'Nature',img:nature },
        { id: 2, name: 'Games',img:nature },
        { id: 3, name: 'Streets',img:nature },
    ],
    games: [
        { id: 1, name: '1',img:nature },
    ],
    nature: [
        { id: 1, name: '1',img:nature },
    ],
    streets: [
        { id: 1, name: '1',img:nature },
    ]
}

const ProductsSlice = createSlice({
    initialState,
    name: 'Products',
    reducers: {
        setNature: (state, action: PayloadAction<setActionPayload>) => {
            let id = createId(state.nature)
            let { name, img } = action.payload
            state.nature.push({ id, name, img })
        },
        setGames: (state, action: PayloadAction<setActionPayload>) => {
            let id = createId(state.games)
            let { name, img } = action.payload
            state.games.push({ id, name, img })
        },
        setStreets: (state, action: PayloadAction<setActionPayload>) => {
            let id = createId(state.streets)
            let { name, img } = action.payload
            state.streets.push({ id, name, img })
        }
    }
})