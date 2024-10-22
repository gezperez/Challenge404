import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import RepositoryCard from './RepositoryCard'; // Adjust the path as necessary

import { Repository } from '@/types';

describe('RepositoryCard', () => {
  const mockOnPress = jest.fn();
  const mockOnCheckPress = jest.fn();

  const repository: Repository = {
    id: 1,
    owner: {
      avatar_url: 'https://example.com/avatar.png',
      login: 'ownerLogin',
    },
    name: 'repositoryName',
    checked: false,
    stargazers_count: 10,
    html_url: '',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with repository data', () => {
    render(
      <RepositoryCard
        repository={repository}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('ownerLogin')).toBeTruthy();
    expect(screen.getByText('repositoryName')).toBeTruthy();
    expect(screen.getByText('10')).toBeTruthy();
  });

  it('calls onPress when the card is pressed', () => {
    render(
      <RepositoryCard
        repository={repository}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(screen.getByLabelText('card-button'));

    expect(mockOnPress).toHaveBeenCalledWith(repository);
  });

  it('renders checkbox when in selection mode', () => {
    render(
      <RepositoryCard
        repository={repository}
        onPress={mockOnPress}
        showCheck={true}
        showSelectionMode={true}
      />,
    );

    expect(screen.getByLabelText('check-button')).toBeTruthy();
  });

  it('calls onCheckPress when checkbox is pressed', () => {
    render(
      <RepositoryCard
        repository={{ ...repository, checked: false }}
        onPress={mockOnPress}
        onCheckPress={mockOnCheckPress}
        showCheck={true}
        showSelectionMode={true}
      />,
    );

    fireEvent.press(screen.getByLabelText('check-button'));

    expect(mockOnCheckPress).toHaveBeenCalledWith(repository);
  });

  it('does not render checkbox when showCheck is false', () => {
    render(
      <RepositoryCard
        repository={repository}
        onPress={mockOnPress}
        showCheck={false}
        showSelectionMode={true}
      />,
    );

    expect(screen.queryByLabelText('check-button')).toBeNull();
  });
});
