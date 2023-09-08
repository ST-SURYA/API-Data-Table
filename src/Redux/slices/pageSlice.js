import { createSlice } from "@reduxjs/toolkit";

const pageCredentials = createSlice({
  name: "pageCredentials",
  initialState: {
    currentPage: 0,
    recordLength: 10,
  },
  reducers: {
    //Reducer to Update Current Page and Record Length
    page: (state, action) => {
      state.currentPage = action.payload;
    },
    length: (state, action) => {
      state.recordLength = action.payload;
    },
  },
});
export const { page, length } = pageCredentials.actions;
export default pageCredentials.reducer;
