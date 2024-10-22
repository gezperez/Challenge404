import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import DSInput from './DSInput';

describe('DSInput Component', () => {
  const mockOnChangeText = jest.fn();
  const mockOnFocus = jest.fn();
  const mockOnBlur = jest.fn();

  const defaultProps = {
    placeholder: 'Enter text',
    onChangeText: mockOnChangeText,
    onFocus: mockOnFocus,
    onBlur: mockOnBlur,
    autoFocus: false,
    regex: /^[a-zA-Z0-9]*$/,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the input with the correct placeholder', () => {
    render(<DSInput {...defaultProps} />);

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeTruthy();
  });

  it('handles focus and blur events', () => {
    render(<DSInput {...defaultProps} />);

    const input = screen.getByPlaceholderText('Enter text');

    fireEvent(input, 'focus');
    expect(mockOnFocus).toHaveBeenCalled();

    fireEvent(input, 'blur');
    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('calls onChangeText when text is changed and matches the regex', () => {
    render(<DSInput {...defaultProps} />);

    const input = screen.getByPlaceholderText('Enter text');

    fireEvent.changeText(input, 'validText123');
    expect(mockOnChangeText).toHaveBeenCalledWith('validText123');
  });

  it('does not call onChangeText when text does not match the regex', () => {
    render(<DSInput {...defaultProps} />);

    const input = screen.getByPlaceholderText('Enter text');

    fireEvent.changeText(input, 'invalidText@#!');
    expect(mockOnChangeText).not.toHaveBeenCalled();
  });

  it('renders the error message when provided', () => {
    const errorMessage = 'Invalid input';
    render(
      <DSInput
        {...defaultProps}
        errorMessage={errorMessage}
      />,
    );

    const errorText = screen.getByText(errorMessage);
    expect(errorText).toBeTruthy();
  });
});
