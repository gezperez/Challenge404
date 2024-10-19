import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import styles from './styles';
import DSInput from '../DSInput';
import { DSInputProps } from '../DSInput/DSInput';

type BottomBarProps = {
  inputProps: DSInputProps;
};

type DSContainerProps = {
  children: ReactNode;
  bottomBarProps?: BottomBarProps;
};

const DSContainer = ({ children, bottomBarProps }: DSContainerProps) => {
  const renderBottomBar = () => {
    if (bottomBarProps) {
      const { inputProps } = bottomBarProps;
      return (
        <SafeAreaView>
          <View style={styles.bottomBarInnerContainer}>
            {inputProps && <DSInput {...inputProps} />}
          </View>
        </SafeAreaView>
      );
    }

    return null;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={116}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>{children}</View>
      {renderBottomBar()}
    </KeyboardAvoidingView>
  );
};

export default DSContainer;
