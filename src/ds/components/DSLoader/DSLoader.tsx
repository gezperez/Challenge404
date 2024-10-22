import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

import { Color } from '@/ds/constants';

const DSLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        accessibilityLabel="activity-indicator"
        size={'large'}
        color={Color.SECONDARY}
      />
    </View>
  );
};

export default DSLoader;
