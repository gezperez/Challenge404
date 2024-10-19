import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';

import { Color, DSAvatar, DSText, Typography } from '@/ds';
import { Repository } from '@/types';

type RepositoryCardProps = {
  repository: Repository;
  onPress: (repository: Repository) => void;
};

const RepositoryCard = ({ repository, onPress }: RepositoryCardProps) => {
  const { owner, name } = repository;

  const { avatar_url, login } = owner;

  const handleItemPress = () => onPress(repository);

  return (
    <TouchableOpacity
      onPress={handleItemPress}
      style={styles.container}
    >
      <DSAvatar source={{ uri: avatar_url }} />
      <View style={styles.textContainer}>
        <DSText
          type={Typography.BODY_LARGE_BOLD}
          numberOfLines={1}
          color={Color.WHITE}
        >
          {login}
        </DSText>
        <DSText
          type={Typography.BODY_DEFAULT_REGULAR}
          numberOfLines={1}
          color={Color.LIGHT_GRAY}
        >
          {name}
        </DSText>
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryCard;
