import React from 'react';

import { render, screen } from '@testing-library/react-native';

import DSAvatar, { AvatarProps } from './DSAvatar';

describe('DSAvatar', () => {
  const mockSource = { uri: 'https://example.com/avatar.jpg' };

  it('renders the User icon when source is not provided', () => {
    const props: AvatarProps = {};

    render(<DSAvatar {...props} />);

    const icon = screen.getAllByLabelText('avatar-icon');
    expect(icon).toBeTruthy();
  });

  it('renders the Image when source is provided', () => {
    const props: AvatarProps = { source: mockSource };

    render(<DSAvatar {...props} />);

    const image = screen.getByLabelText('avatar-image');
    expect(image).toBeTruthy();
    expect(image.props.source).toEqual(mockSource);
  });
});
