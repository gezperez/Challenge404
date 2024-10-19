import { ForwardedRef } from 'react';
import { StyleProp, TextInput, TextInputProps, ViewStyle } from 'react-native';

import IconProps from './IconProps';

type InputProps = {
  ref?: ForwardedRef<TextInput>;
  containerStyle?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  errorMessage?: string;
  success?: boolean;
  isLocked?: boolean;
  isLoading?: boolean;
  iconProps?: IconProps;
  title?: string;
  regex?: RegExp;
} & TextInputProps;

export default InputProps;
