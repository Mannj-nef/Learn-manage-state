import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    title: "123",
    isDaskMode: false,
    isShowSlider: true,
  },
  reducers: {
    toogleDaskMode: (state, action) => {
      state.isDaskMode = action.payload;
    },
    toogleSliderbar: (state, { payload }) => {
      state.isShowSlider = payload;
    },
  },
});

export const { toogleDaskMode, toogleSliderbar } = globalSlice.actions;
export default globalSlice.reducer;
