import { configureStore } from '@reduxjs/toolkit'
import filterSliceReducer from '../features/filterSlice'

export const store = configureStore({
  reducer: {
    filter:filterSliceReducer,
  },
})