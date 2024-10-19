import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const getRepositoryState = (state: RootState) => state.repository;

export const getSelectedRepositoriesSelector = createSelector(
  getRepositoryState,
  (data) => data.repositories.filter(({ checked }) => checked),
);
