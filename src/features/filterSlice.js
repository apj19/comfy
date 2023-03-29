import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    company: 'all',
    category:'all'
  }
  
  export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setComany: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // state.value += 1
        state.company=action.payload
        // console.log(state.company, action.payload);
      },
      setCatgory: (state,action) => {
        state.category=action.payload
        // console.log(state.category, action.payload);

      },
      
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setComany,setCatgory } = filterSlice.actions
  
  export default filterSlice.reducer