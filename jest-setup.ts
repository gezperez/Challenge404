import '@testing-library/react-native/extend-expect';

const mockDispatch = jest.fn();

const mockState = {
  repository: {
    repositoriesLoading: false,
    showSelectionMode: false,
  },
};

jest.mock('@/hooks', () => ({
  useForwardedRef: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn((selector) => selector(mockState)), // Use selector function to get state
  useDispatch: () => mockDispatch,
}));
