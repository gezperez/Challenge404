import React from 'react';

import { render, screen } from '@testing-library/react-native';

import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('displays the correct text', () => {
    render(<EmptyState />);

    expect(screen.getByLabelText('empty-state-list')).toBeTruthy();
  });
});
