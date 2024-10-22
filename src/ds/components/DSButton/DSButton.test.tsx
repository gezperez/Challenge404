import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import DSButton from './DSButton';

import { ButtonProps } from '@/ds/types';

const mockOnPress = jest.fn();

const defaultProps: ButtonProps = {
  onPress: mockOnPress,
  title: 'Submit',
  isDisabled: false,
  isLoading: false,
  style: {},
};

describe('DSButton Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders DSText when not loading', () => {
    render(<DSButton {...defaultProps} />);

    const textElement = screen.getByText('Submit');
    expect(textElement).toBeTruthy();
  });

  it('renders ActivityIndicator when loading', () => {
    const props: ButtonProps = {
      ...defaultProps,
      isLoading: true,
    };

    render(<DSButton {...props} />);

    const loader = screen.getByLabelText('button-activity-indicator');
    expect(loader).toBeTruthy();
  });

  it('disables the button when isDisabled is true', () => {
    const props: ButtonProps = {
      ...defaultProps,
      isDisabled: true,
      isLoading: false,
    };

    render(<DSButton {...props} />);

    const button = screen.getByLabelText('button');

    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('disables the button when isLoading is true', () => {
    const props: ButtonProps = {
      ...defaultProps,
      isLoading: true,
      isDisabled: false,
    };

    render(<DSButton {...props} />);

    const button = screen.getByLabelText('button');

    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('calls onPress when pressed and not disabled', () => {
    render(<DSButton {...defaultProps} />);

    const button = screen.getByLabelText('button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when button is disabled', () => {
    const props: ButtonProps = {
      ...defaultProps,
      isDisabled: true,
    };

    render(<DSButton {...props} />);

    const button = screen.getByLabelText('button');
    fireEvent.press(button);

    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
