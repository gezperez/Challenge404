import React from 'react';
import { Image, ImageSourcePropType, View } from 'react-native';

import { User } from 'lucide-react-native';

import styles from './styles';

import { Color } from '@/ds/constants';

export type AvatarProps = {
  source?: ImageSourcePropType;
};

const DSAvatar = ({ source }: AvatarProps) => {
  const renderContent = () => {
    if (source) {
      return (
        <Image
          style={styles.avatar}
          source={source}
        />
      );
    }

    return <User color={Color.WHITE} />;
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default DSAvatar;