import { createSlice } from "@reduxjs/toolkit";

const hackNewsReducre = createSlice({
  name: "news",
  initialState: {
    hits: [],
    isloading: true,
    queryNew: "",
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.isloading = payload;
    },
    getNews: (state) => {},
    setNews: (state, { payload }) => {
      state.hits = payload;
    },
    setQuery: (state, { payload }) => {
      state.queryNew = payload;
    },
  },
});

export const { setLoading, getNews, setNews, setQuery } =
  hackNewsReducre.actions;
export default hackNewsReducre.reducer;
