import React from 'react';
import { View } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import DSContainer from './DSContainer';

const Children = () => <View testID="child-element">Child Element</View>;

describe('DSContainer Component', () => {
  const mockButtonProps = {
    title: 'Click me',
    onPress: jest.fn(),
    isDisabled: false,
    isLoading: false,
  };

  const mockBottomBarProps = {
    buttonProps: mockButtonProps,
    renderContent: () => <View testID="custom-content">Custom Content</View>,
  };

  it('renders children elements', () => {
    render(
      <DSContainer>
        <Children />
      </DSContainer>,
    );

    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeTruthy();
  });

  it('renders the bottom bar with a button if bottomBarProps are provided', () => {
    render(
      <DSContainer bottomBarProps={mockBottomBarProps}>
        <Children />
      </DSContainer>,
    );

    const button = screen.getByText('Click me');
    expect(button).toBeTruthy();
  });

  it('does not render the bottom bar if bottomBarProps are not provided', () => {
    render(
      <DSContainer>
        <Children />
      </DSContainer>,
    );

    const button = screen.queryByText('Click me');
    expect(button).toBeNull();
  });

  it('renders custom content in the bottom bar if renderContent is provided', () => {
    render(
      <DSContainer bottomBarProps={mockBottomBarProps}>
        <Children />
      </DSContainer>,
    );

    const customContent = screen.getByTestId('custom-content');
    expect(customContent).toBeTruthy();
  });
});
