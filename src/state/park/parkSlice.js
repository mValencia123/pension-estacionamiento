import { createSlice } from '@reduxjs/toolkit'

export const parkSlice = createSlice({
  name: 'park',
  initialState: {
    logged: false,
    email : ""
  },
  reducers: {
    logIn : (state) => {
        state.logged = true;
    },
    logOut : (state) => {
        state.logged = false;
    }
  },
})

export const { logIn, logOut } = parkSlice.actions;

export default parkSlice.reducer;