import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const handleFetchNewTYPE = "news/handleFetchNew";

const handleFetchNew = createAsyncThunk(
  handleFetchNewTYPE,
  async (query, thunkApi) => {
    // Your code
  }
);

const hackNewsReducre = createSlice({
  name: "news",
  initialState: {
    hits: [],
    isloading: true,
    queryNew: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNew.fulfilled, (state, action) => {
        // Your code
      })
      .addCase(handleFetchNew.pending, (state, action) => {
        // Your code
      })
      .addCase(handleFetchNew.rejected, (state, action) => {
        // Your code
      });
  },
});
export default hackNewsReducre.reducer;
