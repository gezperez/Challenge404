import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import ListHeader from './ListHeader';

describe('ListHeader', () => {
  const onChangeTextMock = jest.fn();
  const onDeletePressMock = jest.fn();
  const onPressSelectionModeMock = jest.fn();

  const defaultProps = {
    onChangeText: onChangeTextMock,
    onDeletePress: onDeletePressMock,
    onPressSelectionMode: onPressSelectionModeMock,
    showButtons: true,
    showDeleteButton: true,
    isSelectionMode: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<ListHeader {...defaultProps} />);

    expect(screen.getByPlaceholderText('Search repositories')).toBeTruthy();
    expect(screen.getByText('Select')).toBeTruthy();
    expect(screen.getByText('Select')).toBeTruthy();
  });

  it('calls onChangeText when input text changes', () => {
    render(<ListHeader {...defaultProps} />);
    const input = screen.getByPlaceholderText('Search repositories');

    fireEvent.changeText(input, 'new text');

    expect(onChangeTextMock).toHaveBeenCalledWith('new text');
  });

  it('calls onPressSelectionMode when selection mode button is pressed', () => {
    render(<ListHeader {...defaultProps} />);

    fireEvent.press(screen.getByText('Select'));

    expect(onPressSelectionModeMock).toHaveBeenCalled();
  });

  it('calls onDeletePress when delete button is pressed', () => {
    render(<ListHeader {...defaultProps} />);

    fireEvent.press(screen.getByLabelText('delete-button'));

    expect(onDeletePressMock).toHaveBeenCalled();
  });

  it('renders correctly when in selection mode', () => {
    render(
      <ListHeader
        {...defaultProps}
        isSelectionMode={true}
      />,
    );

    expect(screen.getByText('Select')).toBeTruthy();
  });

  it('does not render the delete button when showDeleteButton is false', () => {
    render(
      <ListHeader
        {...defaultProps}
        showDeleteButton={false}
      />,
    );

    expect(screen.queryByRole('button', { name: /select/i })).toBeNull();
  });
});
