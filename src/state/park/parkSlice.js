import { createSlice } from '@reduxjs/toolkit'

export const parkSlice = createSlice({
  name: 'park',
  initialState: {
    logged: localStorage.getItem("logged") ? localStorage.getItem("logged") : false,
    email : ""
  },
  reducers: {
    logIn : (state) => {
        localStorage.setItem("logged",true);
        state.logged = true;
    },
    logOut : (state) => {
        localStorage.setItem("logged",false);
        state.logged = false;
    }
  },
})

export const { logIn, logOut } = parkSlice.actions;

export default parkSlice.reducer;