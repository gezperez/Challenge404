import React from 'react';

import { RepositoryList, RepositoryListHeader } from '@/components';
import { DSContainer, DSLoader } from '@/ds';
import { useDebounce, useRepository } from '@/hooks';
import { Repository } from '@/types';

const HomeScreen = () => {
  const {
    getRepositories,
    repositories,
    isRepositoriesLoading,
    hasSelectedRepositories,
    switchRepositorySelected,
    removeSelectedRepositories,
  } = useRepository();

  const handleRepositoryPress = () => {};

  const handleRepositoryCheckPress = (repository: Repository) => {
    switchRepositorySelected(repository.id);
  };

  const handleDeletePress = () => {
    removeSelectedRepositories();
  };

  const handleSearchChange = (searchString: string) => {
    getRepositories(searchString, 20);
  };

  const debounceGetRepositories = useDebounce({
    callback: handleSearchChange,
    delay: 500,
  });

  const renderContent = () => {
    if (isRepositoriesLoading) {
      return <DSLoader />;
    }

    return (
      <>
        <RepositoryList
          data={repositories}
          onPress={handleRepositoryPress}
          onCheckPress={handleRepositoryCheckPress}
        />
      </>
    );
  };

  const getBottomBarProps = () => {
    if (hasSelectedRepositories) {
      return {
        buttonProps: {
          title: 'See selected',
          onPress: () => {},
        },
      };
    }

    return undefined;
  };

  return (
    <DSContainer bottomBarProps={getBottomBarProps()}>
      <RepositoryListHeader
        onChangeText={debounceGetRepositories}
        onDeletePress={handleDeletePress}
      />
      {renderContent()}
    </DSContainer>
  );
};

export default HomeScreen;
