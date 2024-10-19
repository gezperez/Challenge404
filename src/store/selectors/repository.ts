import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const getRepositoryState = (state: RootState) => state.repository;

export const getSelectedRepositoriesSelector = createSelector(
  getRepositoryState,
  (data) => data.repositories.filter(({ checked }) => checked),
);

export const getTotalStarCountSelector = createSelector(
  getRepositoryState,
  (repositoryState) =>
    repositoryState.repositories.reduce(
      (totalStars, repository) => totalStars + repository.stargazers_count,
      0,
    ),
);

export const getRepositoriesSortedByStarsSelector = createSelector(
  getRepositoryState,
  (repositoryState) =>
    [...repositoryState.repositories].sort(
      (a, b) => b.stargazers_count - a.stargazers_count,
    ),
);
