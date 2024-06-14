import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteData: [],
        load: false,
        error: '',
    },
    reducers: {
        delateItem(state, { payload }) {
            state.favoriteData = state.favoriteData.filter(el => el.id !== payload)
        },
        addItemToFavorite(state, action) {
            const newItem = { ...action.payload, count: 1 }
            const hasInFavorite = state.favoriteData.find(el => el.id == action.payload.id)
            if (hasInFavorite === undefined) {
                state.favoriteData.push(newItem);
            } else {
                hasInFavorite.count++
            }
            localStorage.setItem('backetFovorite',
                JSON.stringify(state.favoriteData))
        }
    },
    extraReducers: {},
})

export const { addItemToFavorite } = favoriteSlice.actions
export const { actions } = favoriteSlice
export default favoriteSlice.reducer