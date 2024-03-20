import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter App",
  initialState: {
    value: 0,
  },
  /* actions are created inside reducers key */
  reducers: {
    // function to incriment
    incriment:(state,action)=>{
        state.value+=action.payload
    },
    // function to decriment
    decriment:(state,action)=>{
        state.value-=action.payload
    },
    // function to reset
    reset:(state)=>{
        state.value = 0
    }
  },
});

export const {incriment,decriment,reset}=counterSlice.actions

export default counterSlice.reducer