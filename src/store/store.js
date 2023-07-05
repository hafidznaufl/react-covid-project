import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../features/provinces/provincesSlice";

export default configureStore({
  reducer: {
    provinces: provincesReducer,
  },
});
