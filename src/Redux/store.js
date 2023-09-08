import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/pageSlice";

//Redux Store
export default configureStore({
  reducer: {
    pageSlice,
  },
});
