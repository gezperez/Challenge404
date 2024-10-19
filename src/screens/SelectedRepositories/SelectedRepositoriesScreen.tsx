import React from 'react';

import { RepositoryList } from '@/components';
import { DSContainer } from '@/ds';
import { useRepository } from '@/hooks';
import { Repository } from '@/types';

const SelectedRepositoriesScreen = () => {
  const { selectedRepositories, openRepository } = useRepository();

  const handleRepositoryPress = (repository: Repository) =>
    openRepository(repository);

  return (
    <DSContainer>
      <RepositoryList
        data={selectedRepositories}
        onPress={handleRepositoryPress}
      />
    </DSContainer>
  );
};

export default SelectedRepositoriesScreen;
