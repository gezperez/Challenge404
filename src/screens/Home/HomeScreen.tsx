import React, { useEffect } from 'react';

import { RepositoryList } from '@/components';
import { DSContainer } from '@/ds';
import { useRepository } from '@/hooks';

const HomeScreen = () => {
  const { getRepositories, repositories } = useRepository();

  const handleRepositoryPress = () => {};

  useEffect(() => {
    getRepositories('Challenge404', 20);
  }, []);

  return (
    <DSContainer
      bottomBarProps={{
        inputProps: {
          placeholder: 'Search...',
        },
      }}
    >
      <RepositoryList
        data={repositories}
        onPress={handleRepositoryPress}
      />
    </DSContainer>
  );
};

export default HomeScreen;
