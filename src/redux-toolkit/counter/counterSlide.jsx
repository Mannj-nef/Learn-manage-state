import { createSlice } from "@reduxjs/toolkit";

const counterSlide = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    title: 100,
  },
  reducers: {
    incrment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrmentByVlaue: (state, { payload }) => {
      console.log("count", payload);
      state.count += payload;
    },
  },
});

export const { incrment, decrement, incrmentByVlaue } = counterSlide.actions;
export default counterSlide.reducer;
