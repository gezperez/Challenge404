import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import styles from './styles';

import { Color } from '@/ds/constants';

export type DSInputProps = TextInputProps;

const DSInput = (props: DSInputProps) => {
  const { style } = props;

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor={Color.GRAY}
        selectionColor={Color.SECONDARY}
      />
    </View>
  );
};

export default DSInput;
