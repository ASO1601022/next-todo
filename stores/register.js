import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const slice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    regist: (state, action) => {
      state.email = action.payload;
    },
  },
});

export default slice.reducer;
export const { regist } = slice.actions;
