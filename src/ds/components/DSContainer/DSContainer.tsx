import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import styles from './styles';
import DSButton from '../DSButton';

import { ButtonProps } from '@/ds/types';

type BottomBarProps = {
  buttonProps: ButtonProps;
};

type DSContainerProps = {
  children: ReactNode;
  bottomBarProps?: BottomBarProps;
};

const DSContainer = ({ children, bottomBarProps }: DSContainerProps) => {
  const renderBottomBar = () => {
    if (bottomBarProps) {
      const { buttonProps } = bottomBarProps;
      return (
        <SafeAreaView>
          <View style={styles.inputContainer}>
            {buttonProps && <DSButton {...buttonProps} />}
          </View>
        </SafeAreaView>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.innerContainer}>{children}</View>
      {renderBottomBar()}
    </View>
  );
};

export default DSContainer;
