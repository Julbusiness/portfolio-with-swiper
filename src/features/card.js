import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const card = createSlice({

  name: "card",
  initialState,
  reducers: {
    cardNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { cardNumber } = card.actions;
export default card.reducer;