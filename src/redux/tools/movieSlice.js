import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value1: "",
  value2: "",
  refresh: false,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    refresh: (state) => {
      if (state.refresh == true) {
        state.refresh = false;
      } else {
        state.refresh = true;
      }
    },

    deselectCategory1: (state, action) => {
      state.value1 = action.payload;
    },
    deselectCategory2: (state, action) => {
      state.value2 = action.payload;
    },
    updateCategory1: (state, action) => {
      state.value1 = action.payload;
    },
    updateCategory2: (state, action) => {
      state.value2 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  refresh,
  deselectCategory1,
  deselectCategory2,
  updateCategory1,
  updateCategory2,
} = movieSlice.actions;

export default movieSlice.reducer;
