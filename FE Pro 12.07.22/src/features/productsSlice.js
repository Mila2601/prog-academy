import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return state.products;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { getProducts, setProducts } = productsSlice.actions

export default productsSlice.reducer