import React, { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './styles';
import DSButton from '../DSButton';

import { BottomBarProps } from '@/ds/types';

type DSContainerProps = {
  children: ReactNode;
  bottomBarProps?: BottomBarProps;
};

const DSContainer = ({ children, bottomBarProps }: DSContainerProps) => {
  const renderBottomBar = () => {
    if (bottomBarProps) {
      const { buttonProps, renderContent } = bottomBarProps;
      return (
        <SafeAreaView>
          <View style={styles.bottomBarContainer}>
            <View style={styles.renderContainer}>
              {renderContent && renderContent()}
            </View>
            {buttonProps && <DSButton {...buttonProps} />}
          </View>
        </SafeAreaView>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>{children}</View>
      {renderBottomBar()}
    </View>
  );
};

export default DSContainer;
