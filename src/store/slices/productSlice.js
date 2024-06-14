import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProduct = createAsyncThunk('product/getProduct', async () => {
	const { data } = await axios('https://api.escuelajs.co/api/v1/products/')
	// console.log(data);
	return data
})

const productSlice = createSlice({
	name: 'product',
	initialState: {
		productData: [],
		load: false,
		error: '',
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getProduct.pending, state => {
				state.load = true
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.load = false
				state.productData = action.payload
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.load = false
				state.error = action.payload
			})
	},
})
export default productSlice.reducer
