import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductById = createAsyncThunk(
    "productDetal/productDetalSlice",
    async (id) => {
        const { data } = await axios('https://api.escuelajs.co/api/v1/products/' + id)
        console.log(data);
        return data;
        
    }
)

const productDetalSlice = createSlice({
    name: 'productDetal',
    initialState: {
        detalData: [],
        load: false,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductById.pending, state => {
            state.load = true;
        })
            .addCase(getProductById.fulfilled, (state, action) => {
                state.load = false;
                state.detalData = action.payload
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload
            })
    }
})
export default productDetalSlice.reducer