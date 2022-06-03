import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: null },
  reducers: {
    loadedUsers: (state, action) => {
      state.value = action.payload.data;
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((info) => info.id !== action.payload.id);
    },
  },
});

export const { loadedUsers, deleteUser } = userSlice.actions;

export default userSlice.reducer;
