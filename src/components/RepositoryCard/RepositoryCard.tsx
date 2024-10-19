import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ChevronRight } from 'lucide-react-native';

import styles from './styles';

import { Color, DSAvatar, DSCheckBox, DSText, Typography } from '@/ds';
import { useRepository } from '@/hooks';
import { Repository } from '@/types';

type RepositoryCardProps = {
  repository: Repository;
  onPress: (repository: Repository) => void;
  onCheckPress: (repository: Repository) => void;
};

const RepositoryCard = ({
  repository,
  onPress,
  onCheckPress,
}: RepositoryCardProps) => {
  const { showSelectionMode } = useRepository();
  const { owner, name, checked } = repository;

  const { avatar_url, login } = owner;

  const handleItemPress = () => onPress(repository);

  const handleCheckPress = () => onCheckPress(repository);

  return (
    <TouchableOpacity
      onPress={handleItemPress}
      style={styles.container}
    >
      {showSelectionMode && (
        <DSCheckBox
          onChange={handleCheckPress}
          style={styles.checkBox}
          checked={checked}
        />
      )}
      <DSAvatar source={{ uri: avatar_url }} />
      <View style={styles.textContainer}>
        <DSText
          type={Typography.BODY_LARGE_BOLD}
          numberOfLines={1}
          color={Color.SECONDARY}
        >
          {login}
        </DSText>
        <DSText
          type={Typography.BODY_DEFAULT_REGULAR}
          numberOfLines={1}
          color={Color.DARK_GRAY}
        >
          {name}
        </DSText>
      </View>
      <ChevronRight color={Color.SECONDARY} />
    </TouchableOpacity>
  );
};

export default RepositoryCard;
