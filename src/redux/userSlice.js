import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import githubService from '../services/githubServies';

export const fetchingUsers = createAsyncThunk('user/fetchUsers',
  async (query, thunkAPI) => {
    try {
      const response = await githubService.searchUsers(query);
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchingUserDetails = createAsyncThunk('user/fetchUserDetails',
  async (username, thunkAPI) => {
    try {
      const response = await githubService.getUserDetails(username);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
    name: 'user',
  initialState: {
    users: [],
    userDetails: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUsersDetails: (state) => {
      state.userDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchingUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchingUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchingUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchingUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchingUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchingUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUsersDetails } = userSlice.actions;
export default userSlice.reducer;
