import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: { value: null, monoPostVal: null },
  reducers: {
    loadedPosts: (state, action) => {
      state.value = action.payload.data;
    },

    onePost: (state, action) => {
      state.monoPostVal = state.value.filter(
        (info) => info.id === action.payload
      );
    },
  },
});

export const { loadedPosts, onePost } = postSlice.actions;

export default postSlice.reducer;
