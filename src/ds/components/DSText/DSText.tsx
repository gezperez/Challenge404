import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';

import styles from './styles';

import { Typography, TypographyVariant } from '@/ds/constants';

export type TypographyType = keyof typeof TypographyVariant;

export type TextDSProps = {
  color?: string;
  style?: StyleProp<TextStyle>;
  upperCase?: boolean;
  type?: Typography;
  alignCenter?: boolean;
} & TextProps;

const getFontStyle = (type?: Typography) => {
  if (type) {
    return TypographyVariant[type];
  }

  return TypographyVariant.bodyDefaultRegular;
};

const DSText = (props: TextDSProps) => {
  const { children, color, style, upperCase, type, alignCenter } = props;

  return (
    <Text
      {...props}
      style={[
        getFontStyle(type),
        !!upperCase && styles.upperCase,
        alignCenter && styles.alignCenter,
        !!color && { color },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default DSText;
