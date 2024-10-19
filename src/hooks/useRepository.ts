import { useAppDispatch, useAppSelector } from './store';

import { fetchRepositories } from '@/store/slices/repositorySlice';

const useRepository = () => {
  const dispatch = useAppDispatch();

  const repositories = useAppSelector((state) => state.repository.repositories);

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
  };
};

export default useRepository;
