import React from 'react';

import { render, screen } from '@testing-library/react-native';

import StarCount from './StarCount';

describe('StarCount', () => {
  it('renders correctly with the given amount', () => {
    render(<StarCount amount={10} />);

    expect(screen.getByText('10')).toBeTruthy();
  });
});
