import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cartitemsList:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddtoCart: (state,action) => {

      let index=state.cartitemsList.findIndex((c)=> c.id == action.payload.id);
      
      if(index  == -1){
        state.cartitemsList.push(action.payload);
      }else{
        state.cartitemsList[index].pquantity += action.payload.pquantity;
      }
      
      // state.cartitemsList.findIndex((c)=> c.id == action.payload.id)

      
    },
    removefromCart: (state,action) => {
      state.cartitemsList =state.cartitemsList.filter((f)=> f.id != action.payload)
    },
    incrementProductQuantity: (state, action) => {
    //   state.value += action.payload
    let index=state.cartitemsList.findIndex((c)=> c.id == action.payload.id);

    state.cartitemsList[index].pquantity += action.payload.pquantity;

    },
  },
})

export const { AddtoCart, removefromCart, incrementProductQuantity } = cartSlice.actions

export default cartSlice.reducer