import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const slice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default slice.reducer;
export const { login } = slice.actions;
