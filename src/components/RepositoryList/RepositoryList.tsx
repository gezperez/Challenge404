import React from 'react';
import { FlatList } from 'react-native';

import RepositoryCard from '../RepositoryCard';

import { Repository } from '@/types';

type RepositoryListProps = {
  data: Repository[];
  onPress: (repository: Repository) => void;
  onCheckPress?: (repository: Repository) => void;
};

const RepositoryList = ({
  data,
  onPress,
  onCheckPress,
}: RepositoryListProps) => {
  const getKey = (item: Repository) => item.id.toString();

  const renderItem = ({ item }: { item: Repository; index: number }) => (
    <RepositoryCard
      repository={item}
      onPress={onPress}
      onCheckPress={onCheckPress}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={getKey}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;
