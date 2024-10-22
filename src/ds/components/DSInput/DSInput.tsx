import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';
import DSText from '../DSText';

import { Color, Typography } from '@/ds/constants';
import { InputProps } from '@/ds/types';
import { useForwardedRef } from '@/hooks';

const DSInput = (props: InputProps, ref?: ForwardedRef<TextInput>) => {
  const {
    containerStyle,
    autoFocus,
    onFocus,
    onBlur,
    onChangeText,
    regex,
    errorMessage,
    style,
  } = props;

  const forwardedRef = useForwardedRef(ref);

  const [focus, setFocus] = useState(false);

  const placeholder = focus ? '' : props.placeholder;

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleOnChangeText = (text: string) => {
    if (onChangeText && (!regex || regex.test(text))) {
      onChangeText(text);
    }
  };

  const handleOnPress = () => {
    forwardedRef.current?.focus();
  };

  useEffect(() => {
    if (autoFocus) {
      forwardedRef?.current?.focus();
      setFocus(true);
    }
  }, [autoFocus, forwardedRef, ref]);

  return (
    <View style={containerStyle}>
      <TouchableWithoutFeedback
        onPress={handleOnPress}
        accessibilityLabel="input-button"
      >
        <View
          style={[styles.inputContainer, errorMessage && styles.errorStyle]}
        >
          <TextInput
            {...props}
            ref={forwardedRef}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChangeText={handleOnChangeText}
            placeholder={placeholder}
            placeholderTextColor={Color.SECONDARY}
            style={[styles.input, style]}
            autoFocus={false}
            selectionColor={Color.SECONDARY}
          />
        </View>
      </TouchableWithoutFeedback>

      {!!errorMessage && (
        <DSText
          type={Typography.BODY_SMALL_BOLD}
          style={styles.descriptionText}
          color={Color.DANGER}
        >
          {errorMessage}
        </DSText>
      )}
    </View>
  );
};

export default forwardRef(DSInput);
