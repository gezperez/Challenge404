import React from 'react';

import { ListHeader, RepositoryList } from '@/components';
import { DSContainer, DSLoader } from '@/ds';
import { useAppNavigation, useDebounce, useRepository } from '@/hooks';
import { Repository } from '@/types';

const HomeScreen = () => {
  const {
    getRepositories,
    repositories,
    isRepositoriesLoading,
    hasSelectedRepositories,
    switchRepositorySelected,
    removeSelectedRepositories,
    showSelectionMode,
    hasRepositories,
    switchSelectionMode,
    openRepository,
  } = useRepository();

  const { navigate } = useAppNavigation();

  const handleRepositoryPress = (repository: Repository) =>
    openRepository(repository);

  const handleRepositoryCheckPress = (repository: Repository) => {
    switchRepositorySelected(repository.id);
  };

  const handleDeletePress = () => {
    removeSelectedRepositories();
  };

  const handleSearchChange = (searchString: string) => {
    getRepositories(searchString, 20);
  };

  const handleSeeSelectionPress = () => {
    navigate('SelectedRepositories');
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
          onPress: handleSeeSelectionPress,
        },
      };
    }

    return undefined;
  };

  return (
    <DSContainer bottomBarProps={getBottomBarProps()}>
      <ListHeader
        onChangeText={debounceGetRepositories}
        onDeletePress={handleDeletePress}
        showButtons={hasRepositories}
        isSelectionMode={showSelectionMode}
        onPressSelectionMode={switchSelectionMode}
        showDeleteButton={hasSelectedRepositories}
      />
      {renderContent()}
    </DSContainer>
  );
};

export default HomeScreen;
