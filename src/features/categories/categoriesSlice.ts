import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const { data } = await axios.get('http://localhost:3001/categories');
  return data
})

export const selectAllCategories = (state: { categories: { categories: any; }; }) => state.categories.categories;

const initialState = {
  categories: [],
  status: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.categories = state.categories.concat(action.payload)
      })
      // .addCase(fetchCategories.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      // })
  }
})

export default categoriesSlice.reducer;