import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import DSText from '../DSText';
import styles from './styles';

import { Color, Typography } from '@/ds/constants';
import { ButtonProps } from '@/ds/types';

const ButtonText = ({
  onPress,
  title,
  style,
  isDisabled,
  isLoading,
}: ButtonProps) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size={'small'}
          color={Color.WHITE}
        />
      );
    }

    return (
      <DSText
        type={Typography.BODY_DEFAULT_BOLD}
        color={Color.WHITE}
        numberOfLines={1}
      >
        {title}
      </DSText>
    );
  };

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

export default ButtonText;
