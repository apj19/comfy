import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    islogin: false,
    
  }

  export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      UserLoggedIn: (state,action) => {
        state.islogin=true;
      },
      UserLoggedOut: (state,action) => {
        state.islogin=false;
      },
     
    },
  })
  
  export const { UserLoggedIn,UserLoggedOut} = loginSlice.actions
  
  export default loginSlice.reducer