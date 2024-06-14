import { createSlice } from "@reduxjs/toolkit";

const backetSlice = createSlice({
    name: "backets",
    initialState: {
        backetData: [],
        load: false,
        error: '',
    },
    reducers: {
        delateItem(state, { payload }) {
            state.backetData = state.backetData.filter(el => el.id !== payload)
        },
        incrementCount(state, { payload }) {
            const item = state.backetData.find(el => el.id == payload)
            item.count++
        },
        decrementCount(state, { payload }) {
            const item = state.backetData.find(el => el.id == payload)
            item.count--
        },
        addItemToBacket(state, action) {
            const newItem = { ...action.payload, count: 1 }
            const hasInBacket = state.backetData.find(el => el.id == action.payload.id)
            if (hasInBacket === undefined) {
                state.backetData.push(newItem);
            } else {
                hasInBacket.count++
            }
            localStorage.setItem('backetStorege',
                JSON.stringify(state.backetData))
        },
    },
    extraReducers: {},
});
export const { addItemToBacket } = backetSlice.actions
export const { actions } = backetSlice
export default backetSlice.reducer