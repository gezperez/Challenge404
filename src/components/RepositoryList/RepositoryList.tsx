import React from 'react';
import { FlatList } from 'react-native';

import RepositoryCard from '../RepositoryCard';
import { EmptyState } from './components';

import { Repository } from '@/types';

type RepositoryListProps = {
  data: Repository[];
  onPress: (repository: Repository) => void;
  onCheckPress?: (repository: Repository) => void;
  showChecks?: boolean;
};

const RepositoryList = ({
  data,
  onPress,
  onCheckPress,
  showChecks,
}: RepositoryListProps) => {
  const getKey = (item: Repository) => item.id.toString();

  const renderItem = ({ item }: { item: Repository; index: number }) => (
    <RepositoryCard
      repository={item}
      onPress={onPress}
      onCheckPress={onCheckPress}
      showCheck={showChecks}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={getKey}
      renderItem={renderItem}
      ListEmptyComponent={EmptyState}
    />
  );
};

export default RepositoryList;
