import { PayloadAction } from '@reduxjs/toolkit';

import { createAppSlice } from '../utils';

import RepositoryApi from '@/api/repository';
import { FetchRepositoriesResponse, Repository } from '@/types';

interface RepositoryState {
  repositoriesLoading: boolean;
  repositoriesError: boolean;
  repositories: Repository[];
  showSelectionMode: boolean;
}

const initialState: RepositoryState = {
  repositories: [],
  repositoriesError: false,
  repositoriesLoading: false,
  showSelectionMode: false,
};

const repositorySlice = createAppSlice({
  name: 'repository',
  initialState,
  reducers: (create) => ({
    setShowSelectionMode: create.reducer((state) => {
      state.showSelectionMode = !state.showSelectionMode;
    }),
    setRepositorySelected: create.reducer(
      (state, action: PayloadAction<number>) => {
        const repoIndex = state.repositories.findIndex(
          (repository) => repository.id === action.payload,
        );
        if (repoIndex !== -1) {
          state.repositories[repoIndex].checked =
            !state.repositories[repoIndex].checked;
        }
      },
    ),
    removeRepositorySelection: create.reducer((state) => {
      state.repositories.forEach((repo) => {
        repo.checked = false;
      });
    }),
    deleteRepositories: create.reducer((state) => {
      state.repositories = [];
    }),
    deleteSelectedRepositories: create.reducer((state) => {
      state.repositories = state.repositories.filter((repo) => !repo.checked);
    }),
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

export const {
  fetchRepositories,
  setShowSelectionMode,
  setRepositorySelected,
  removeRepositorySelection,
  deleteSelectedRepositories,
  deleteRepositories,
} = repositorySlice.actions;

export default repositorySlice.reducer;
