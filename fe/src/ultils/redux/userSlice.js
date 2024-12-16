// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    role: 'user',
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = userSlice.actions;
export default userSlice.reducer;