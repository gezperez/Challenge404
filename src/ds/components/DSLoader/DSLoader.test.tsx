import React from 'react';

import { render, screen } from '@testing-library/react-native';

import DSLoader from './DSLoader';

describe('DSLoader', () => {
  it('renders the ActivityIndicator', () => {
    render(<DSLoader />);

    const activityIndicator = screen.getByLabelText('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});
