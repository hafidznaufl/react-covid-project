import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/constants/provinces";

const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    provinces: data.provinces,
  },
  reducers: {
    updateProvinces: (state, action) => {
      state.provinces = action.payload;
    },
    resetProvinces: (state) => {
      state.provinces = data.provinces;
    },
  },
});

const provincesReducer = provincesSlice.reducer;
const { updateProvinces, resetProvinces } = provincesSlice.actions;

export { updateProvinces, resetProvinces };
export default provincesReducer;
