import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
}

export const modal = createSlice({

  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.value = true;
    },
    closeModal: (state, action) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;