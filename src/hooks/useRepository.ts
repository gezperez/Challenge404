import { Linking } from 'react-native';

import { useAppDispatch, useAppSelector } from './store';

import {
  getRepositoriesSortedByStarsSelector,
  getSelectedRepositoriesSelector,
  getTotalStarCountSelector,
} from '@/store/selectors';
import {
  deleteRepositories,
  deleteSelectedRepositories,
  fetchRepositories,
  removeRepositorySelection,
  setRepositorySelected,
  setShowSelectionMode,
} from '@/store/slices/repositorySlice';
import { Repository } from '@/types';

const useRepository = () => {
  const dispatch = useAppDispatch();

  const repositories = useAppSelector(getRepositoriesSortedByStarsSelector);

  const showSelectionMode = useAppSelector(
    (state) => state.repository.showSelectionMode,
  );

  const selectedRepositories = useAppSelector(getSelectedRepositoriesSelector);

  const isRepositoriesLoading = useAppSelector(
    (state) => state.repository.repositoriesLoading,
  );

  const hasRepositories = repositories.length > 0;

  const hasSelectedRepositories = selectedRepositories.length > 0;

  const totalStarsCount = useAppSelector(getTotalStarCountSelector);

  const switchSelectionMode = () => {
    dispatch(setShowSelectionMode());
    dispatch(removeRepositorySelection());
  };

  const switchRepositorySelected = (id: number) => {
    dispatch(setRepositorySelected(id));
  };

  const removeRepositories = () => {
    dispatch(deleteRepositories());
  };

  const removeSelectedRepositories = () => {
    dispatch(deleteSelectedRepositories());
  };

  const openRepository = (repository: Repository) => {
    Linking.openURL(repository.html_url);
  };

  const getRepositories = (searchString: string, count: number) => {
    dispatch(
      fetchRepositories({
        searchString,
        count,
      }),
    );
  };

  return {
    getRepositories,
    repositories,
    isRepositoriesLoading,
    hasRepositories,
    selectedRepositories,
    hasSelectedRepositories,
    showSelectionMode,
    switchSelectionMode,
    switchRepositorySelected,
    removeSelectedRepositories,
    removeRepositories,
    openRepository,
    totalStarsCount,
  };
};

export default useRepository;
