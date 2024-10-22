// DSText.test.js

import React from 'react';

import { render, screen } from '@testing-library/react-native';

import DSText from './DSText';

import { Typography, TypographyVariant } from '@/ds/constants';

describe('DSText', () => {
  it('renders with default styles', () => {
    render(<DSText>Default Text</DSText>);

    const textElement = screen.getByText('Default Text');
    expect(textElement).toBeTruthy();
  });

  it('applies the correct color when provided', () => {
    const color = 'red';
    render(<DSText color={color}>Colored Text</DSText>);

    const textElement = screen.getByText('Colored Text');
    expect(textElement.props.style).toContainEqual({ color });
  });

  it('applies uppercase style when upperCase is true', () => {
    render(<DSText upperCase>Uppercase Text</DSText>);

    const textElement = screen.getByText('Uppercase Text');
    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({
        textTransform: 'uppercase',
      }),
    );
  });

  it('applies correct typography style based on type', () => {
    const type = Typography.BODY_EXTRA_LARGE_BOLD;
    render(<DSText type={type}>Bold Text</DSText>);

    const textElement = screen.getByText('Bold Text');
    expect(textElement.props.style).toContainEqual(TypographyVariant[type]);
  });

  it('applies center alignment style when alignCenter is true', () => {
    render(<DSText alignCenter>Centered Text</DSText>);

    const textElement = screen.getByText('Centered Text');
    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({
        textAlign: 'center',
      }),
    );
  });
});
