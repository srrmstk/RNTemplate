import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface CounterState {
  value: number;
  isLoading: boolean;
}

export const incrementThunk = createAsyncThunk('ASYNC_INCREMENT', async () => {
  await axios.get('https://api.github.com/users/octocat').then((resp) => {
    console.log(resp);
  });
  return 2;
});

const initialState: CounterState = {
  value: 0,
  isLoading: false,
};

const counterSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(incrementThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value += action.payload;
      })
      .addCase(incrementThunk.rejected, (state) => {
        state.isLoading = false;
        state.value = 0;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
