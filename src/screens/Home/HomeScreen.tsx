import React, { useState } from 'react';

import { ListHeader, RepositoryList, StarCount } from '@/components';
import { DSContainer, DSLoader } from '@/ds';
import { BottomBarProps } from '@/ds/types';
import { useAppNavigation, useDebounce, useRepository } from '@/hooks';
import { Repository } from '@/types';

const HomeScreen = () => {
  const [inputError, setInputError] = useState<string | undefined>();

  const {
    getRepositories,
    repositories,
    isRepositoriesLoading,
    hasSelectedRepositories,
    switchRepositorySelected,
    removeSelectedRepositories,
    removeRepositories,
    showSelectionMode,
    hasRepositories,
    switchSelectionMode,
    openRepository,
    totalStarsCount,
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
    const trimmedString = searchString.trim();

    if (trimmedString.length < 3) {
      return setInputError('You have to enter at least 3 characters');
    }

    setInputError(undefined);
    removeRepositories();
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
      <RepositoryList
        data={repositories}
        onPress={handleRepositoryPress}
        onCheckPress={handleRepositoryCheckPress}
        showSelectionMode={showSelectionMode}
      />
    );
  };

  const getBottomBarProps = () => {
    let props: BottomBarProps | undefined;

    if (hasSelectedRepositories) {
      props = {
        ...props,
        buttonProps: {
          title: 'See selected',
          onPress: handleSeeSelectionPress,
        },
      } as BottomBarProps;
    }

    if (hasRepositories) {
      props = {
        ...props,
        renderContent: () => <StarCount amount={totalStarsCount} />,
      } as BottomBarProps;
    }

    return props;
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
        inputError={inputError}
      />
      {renderContent()}
    </DSContainer>
  );
};

export default HomeScreen;
