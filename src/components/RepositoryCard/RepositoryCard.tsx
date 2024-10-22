import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Star } from 'lucide-react-native';

import styles from './styles';

import { Color, DSAvatar, DSCheckBox, DSText, Typography } from '@/ds';
import { Repository } from '@/types';

type RepositoryCardProps = {
  repository: Repository;
  onPress: (repository: Repository) => void;
  onCheckPress?: (repository: Repository) => void;
  showCheck?: boolean;
  showSelectionMode?: boolean;
};

const RepositoryCard = ({
  repository,
  onPress,
  onCheckPress,
  showCheck = true,
  showSelectionMode,
}: RepositoryCardProps) => {
  const { owner, name, checked, stargazers_count } = repository;

  const { avatar_url, login } = owner;

  const handleItemPress = () => onPress(repository);

  const handleCheckPress = () => onCheckPress && onCheckPress(repository);

  return (
    <TouchableOpacity
      onPress={handleItemPress}
      style={styles.container}
      accessibilityLabel="card-button"
    >
      {showSelectionMode && showCheck && (
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
      <View style={styles.rightContainer}>
        <DSText
          color={Color.SECONDARY}
          type={Typography.BODY_SMALL_BOLD}
          style={styles.starText}
        >
          {stargazers_count}
        </DSText>
        <Star
          color={Color.TERTIARY}
          size={16}
          strokeWidth={3}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryCard;
