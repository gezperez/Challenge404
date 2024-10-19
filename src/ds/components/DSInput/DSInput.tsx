import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';

import { Color } from '@/ds/constants';

type RightIconProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export type DSInputProps = {
  rightIconProps?: RightIconProps;
} & TextInputProps;

const DSInput = (props: DSInputProps) => {
  const { rightIconProps, style } = props;

  const renderRightIcon = () => {
    if (rightIconProps) {
      return (
        <TouchableOpacity
          style={styles.icon}
          onPress={rightIconProps.onPress}
        >
          {/*  <Feather
            name={rightIconProps.iconName}
            size={20}
            color={Color.WHITE}
          /> */}
        </TouchableOpacity>
      );
    }

    return null;
  };
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor={Color.LIGHT_GRAY}
        selectionColor={Color.PRIMARY}
      />
      {renderRightIcon()}
    </View>
  );
};

export default DSInput;
