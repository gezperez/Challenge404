import React from 'react';
import { View } from 'react-native';

import styles from './styles';

import { Color, DSText, Typography } from '@/ds';

const EmptyState = () => (
  <View
    style={styles.container}
    accessibilityLabel="empty-state-list"
  >
    <DSText
      type={Typography.BODY_DEFAULT_BOLD}
      color={Color.GRAY}
    >
      No repositories were found
    </DSText>
  </View>
);

export default EmptyState;
