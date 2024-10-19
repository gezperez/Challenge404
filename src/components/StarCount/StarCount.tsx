import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Star } from 'lucide-react-native';

import styles from './styles';

import { Color, DSText, Typography } from '@/ds';

type StarCountProps = {
  amount: number;
  style?: StyleProp<ViewStyle>;
};

const StarCount = ({ amount, style }: StarCountProps) => {
  return (
    <View style={[styles.container, style]}>
      <DSText
        color={Color.BLACK}
        type={Typography.BODY_LARGE_BOLD}
        style={styles.text}
      >
        {amount}
      </DSText>
      <Star
        color={Color.TERTIARY}
        size={24}
        strokeWidth={3.5}
      />
    </View>
  );
};

export default StarCount;
