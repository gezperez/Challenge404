import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import DSCheckbox, { DSCheckboxProps } from './DSCheckbox';

describe('DSCheckbox', () => {
  const mockOnChange = jest.fn();

  const defaultProps: DSCheckboxProps = {
    checked: false,
    onChange: mockOnChange,
    isDisabled: false,
    style: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the checkbox unchecked by default', () => {
    render(<DSCheckbox {...defaultProps} />);

    const icon = screen.queryByLabelText('check-icon');
    expect(icon).toBeNull();
  });

  it('renders the checkmark icon when checked', () => {
    const props: DSCheckboxProps = {
      ...defaultProps,
      checked: true,
    };

    render(<DSCheckbox {...props} />);

    const icon = screen.getAllByLabelText('check-icon');
    expect(icon).toBeTruthy();
  });

  it('calls onChange with the opposite value when pressed', () => {
    render(<DSCheckbox {...defaultProps} />);

    const checkbox = screen.getByLabelText('check-button');
    fireEvent.press(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when checkbox is disabled', () => {
    const props: DSCheckboxProps = {
      ...defaultProps,
      isDisabled: true,
    };

    render(<DSCheckbox {...props} />);

    const checkbox = screen.getByLabelText('check-button');
    fireEvent.press(checkbox);

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
