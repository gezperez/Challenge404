import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Check } from 'lucide-react-native';

import styles from './styles';

import { Color } from '@/ds/constants';

export type DSCheckboxProps = {
  checked?: boolean;
  isDisabled?: boolean;
  accessibilityLabel?: string;
  onChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
};

const DSCheckbox = ({
  checked,
  onChange,
  style,
  isDisabled,
}: DSCheckboxProps) => {
  const handleOnPress = () => {
    onChange(!checked);
  };

  const renderIcon = () => {
    if (checked) {
      return (
        <View>
          <Check
            color={Color.WHITE}
            size={16}
            strokeWidth={5}
          />
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={[style]}
      onPress={handleOnPress}
      activeOpacity={0.8}
      hitSlop={16}
      disabled={isDisabled}
    >
      <View style={[styles.container, checked && styles.checkedStyle]}>
        {renderIcon()}
      </View>
    </TouchableOpacity>
  );
};

export default DSCheckbox;
