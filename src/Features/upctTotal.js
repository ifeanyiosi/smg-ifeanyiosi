import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "upct",
  initialState: {
    userValue: 0,
    postValue: 0,
    tagValue: 0,
    commentValue: 0,
  },
  reducers: {
    userTotal: (state, action) => {
      state.userValue = action.payload;
    },
    commentTotal: (state, action) => {
      state.commentValue = action.payload;
    },
    tagTotal: (state, action) => {
      state.tagValue = action.payload;
    },
    postTotal: (state, action) => {
      state.postValue = action.payload;
    },

    update: (state, action) => {
      state.userValue = state.userValue - 1;
      state.commentValue =
        state.commentValue - action.payload.singleUserComment;
      state.postValue = state.postValue - action.payload.singleUserPost;
    },
  },
});

export const { userTotal, commentTotal, tagTotal, postTotal, update } =
  totalSlice.actions;

export default totalSlice.reducer;
