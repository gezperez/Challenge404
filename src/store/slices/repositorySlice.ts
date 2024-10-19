import { PayloadAction } from '@reduxjs/toolkit';

import { createAppSlice } from '../utils';

import RepositoryApi from '@/api/repository';
import { FetchRepositoriesResponse, Repository } from '@/types';

interface RepositoryState {
  repositoriesLoading: boolean;
  repositoriesError: boolean;
  repositories: Repository[];
  selectedRepositories: Repository[];
}

const initialState: RepositoryState = {
  repositories: [],
  selectedRepositories: [],
  repositoriesError: false,
  repositoriesLoading: false,
};

const repositorySlice = createAppSlice({
  name: 'repository',
  initialState,
  reducers: (create) => ({
    fetchRepositories: create.asyncThunk(
      async (
        { searchString, count }: { searchString: string; count: number },
        { rejectWithValue },
      ) => {
        try {
          const response = await RepositoryApi.getRepositories(
            searchString,
            count,
          );

          return response.data;
        } catch (error) {
          rejectWithValue(error);
        }
      },
      {
        pending: (state) => {
          state.repositoriesError = false;
          state.repositoriesLoading = true;
        },
        rejected: (state) => {
          state.repositoriesError = true;
        },
        fulfilled: (
          state,
          action: PayloadAction<FetchRepositoriesResponse>,
        ) => {
          state.repositories = action.payload.items;
        },
        settled: (state) => {
          state.repositoriesLoading = false;
        },
      },
    ),
  }),
});

export const { fetchRepositories } = repositorySlice.actions;

export default repositorySlice.reducer;
