import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjectLists = createAsyncThunk(
  'project/fetchProjectLists',
  async () => {
    const result = await axios.get('http://localhost:4000/project');
    // console.log(result.data);
    return result.data;
  },
);

export const connecting = createAsyncThunk('project/connecting', async () => {
  const result = await axios.get('http://3.39.135.44:8080/api/healthcheck');
  // console.log(result.data);
  return result.data;
});

export const fetchProjectListsByOptions = createAsyncThunk(
  'project/fetchProjectListsByOptions',
  async filteringOptions => {
    const result = await axios.post(
      'http://3.39.135.44:8080/api/project/keyword-search?condition=LATEST',
      filteringOptions,
    );
    console.log(result.data.result.data);
    return result.data.result.data;
  },
);

const initialState = {
  loading: false,
  projectLists: null,
  error: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    fetchProjectSuccess: (state, action) => {
      state.projectLists = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchProjectLists.pending]: state => {
      state.loading = true;
    },
    [fetchProjectLists.fulfilled]: (state, action) => {
      state.projectLists = action.payload.sort(
        (a, b) => new Date(b.created_date) - new Date(a.created_date),
      );
      // console.log(state.projectLists, 'action.payload');
      state.loading = false;
    },
    [fetchProjectLists.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchProjectListsByOptions.pending]: state => {
      state.loading = true;
    },
    [fetchProjectListsByOptions.fulfilled]: (state, action) => {
      state.projectLists = action.payload;
      // .sort(
      //   (a, b) => new Date(b.created_date) - new Date(a.created_date),
      // );
      // console.log(state.projectLists, 'action.payload');
      state.loading = false;
    },
    [fetchProjectListsByOptions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { fetchProjectSuccess } = projectSlice.actions;
export default projectSlice.reducer;
