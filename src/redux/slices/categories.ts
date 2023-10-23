import { createSlice } from '@reduxjs/toolkit'

export type Categories = {
  id: number
  name: string
}

export type InitialState = {

  categories: Categories[]
  error: null | string
  isLoading: boolean
}

const initialState: InitialState = {
    categories: [],
    error: null,
    isLoading: false
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
      state.isLoading = true
    },
    categoriesSuccess: (state, action) => {
      state.isLoading = false
      state.categories = action.payload
    },

    
  }
})
export const {  categoriesRequest, categoriesSuccess } = categoriesSlice.actions

export default categoriesSlice.reducer
