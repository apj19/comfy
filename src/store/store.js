import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from '../features/cartSlice'
import loginReducer from '../features/loginSlice'


export const store = configureStore({
  reducer: {
    cart : cartSliceReducer,
    login: loginReducer
   },
})