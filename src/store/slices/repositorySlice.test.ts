import repositoryReducer, {
  deleteRepositories,
  deleteSelectedRepositories,
  removeRepositorySelection,
  RepositoryState,
  setRepositorySelected,
  setShowSelectionMode,
} from './repositorySlice';

const initialState: RepositoryState = {
  repositories: [
    {
      id: 1,
      name: 'Repo1',
      checked: false,
      stargazers_count: 120,
      owner: {
        avatar_url: '',
        login: 'Repo Owner',
      },
      html_url: '',
    },
    {
      id: 2,
      name: 'Repo2',
      checked: false,
      stargazers_count: 100,
      owner: {
        avatar_url: '',
        login: 'Repo Owner 2',
      },
      html_url: '',
    },
  ],
  repositoriesLoading: false,
  repositoriesError: false,
  showSelectionMode: false,
};

describe('repositorySlice reducers', () => {
  it('should toggle showSelectionMode', () => {
    const newState = repositoryReducer(initialState, setShowSelectionMode());
    expect(newState.showSelectionMode).toBe(true);
  });

  it('should toggle the checked prop of a repository by id', () => {
    const newState = repositoryReducer(initialState, setRepositorySelected(1));
    expect(newState.repositories[0].checked).toBe(true); // The first repo's `checked` should now be true
  });

  it('should uncheck all repositories on removeRepositorySelection', () => {
    const newState = repositoryReducer(
      initialState,
      removeRepositorySelection(),
    );
    newState.repositories.forEach((repo) => {
      expect(repo.checked).toBe(false);
    });
  });

  it('should delete all repositories on deleteRepositories', () => {
    const newState = repositoryReducer(initialState, deleteRepositories());
    expect(newState.repositories).toEqual([]);
  });

  it('should delete only checked repositories on deleteSelectedRepositories', () => {
    const newState = repositoryReducer(
      initialState,
      deleteSelectedRepositories(),
    );
    expect(newState.repositories).toHaveLength(1);
    expect(newState.repositories[0].id).toBe(1);
  });
});
