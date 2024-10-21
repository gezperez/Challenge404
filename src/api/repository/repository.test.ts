import ApiBase from '../ApiBase';

import RepositoryApi from '.';

jest.mock('../ApiBase');

describe('RepositoryApi', () => {
  const mockCall = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (ApiBase as jest.MockedClass<typeof ApiBase>).prototype.call = mockCall;
  });

  it('should call the ApiBase call method with correct parameters', () => {
    mockCall.mockResolvedValueOnce({ data: [] });

    RepositoryApi.getRepositories('React', 5);

    expect(mockCall).toHaveBeenCalledWith('repositories?q=React&per_page=5');
  });

  it('should return data from the ApiBase call method', async () => {
    const mockResponse = { data: [{ id: 1, name: 'Repo1' }] };
    mockCall.mockResolvedValueOnce(mockResponse);

    const response = await RepositoryApi.getRepositories('Vue', 3);

    expect(response).toEqual(mockResponse);
  });
});
