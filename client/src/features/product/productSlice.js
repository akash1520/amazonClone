import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
  return axios
    .get('https://amazon-clone-hs9d4w1kd-akash1520.vercel.app/getproducts')
    .then(response => response.data)
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})

export default productSlice.reducer