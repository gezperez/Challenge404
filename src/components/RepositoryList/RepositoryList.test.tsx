import React from 'react';

import { render, screen } from '@testing-library/react-native';

import RepositoryList from './RepositoryList'; // Adjust the path as necessary

import { Repository } from '@/types';

describe('RepositoryList', () => {
  const mockOnPress = jest.fn();

  const repositories: Repository[] = [
    {
      id: 1,
      owner: {
        avatar_url: 'https://example.com/avatar1.png',
        login: 'ownerLogin1',
      },
      name: 'repositoryName1',
      checked: false,
      stargazers_count: 10,
      html_url: '',
    },
    {
      id: 2,
      owner: {
        avatar_url: 'https://example.com/avatar2.png',
        login: 'ownerLogin2',
      },
      name: 'repositoryName2',
      checked: true,
      stargazers_count: 20,
      html_url: '',
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with repository data', () => {
    render(
      <RepositoryList
        data={repositories}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('repositoryName1')).toBeTruthy();
  });

  it('renders empty state when there is no data', () => {
    render(
      <RepositoryList
        data={[]}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByLabelText('empty-state-list')).toBeTruthy();
  });
});
