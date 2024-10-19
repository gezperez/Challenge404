import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Trash2 } from 'lucide-react-native';

import styles from './styles';

import { Color, DSCheckBox, DSInput, DSText, Typography } from '@/ds';
import { useRepository } from '@/hooks';

type RepositoryListHeaderProps = {
  onChangeText: (text: string) => void;
  onDeletePress: () => void;
};

const RepositoryListHeader = ({
  onChangeText,
  onDeletePress,
}: RepositoryListHeaderProps) => {
  const {
    hasRepositories,
    switchSelectionMode,
    showSelectionMode,
    hasSelectedRepositories,
  } = useRepository();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <DSInput
          placeholder="Search repositories"
          onChangeText={onChangeText}
        />
      </View>
      {hasRepositories && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.checkContainer}
            onPress={switchSelectionMode}
          >
            <DSCheckBox
              onChange={() => {}}
              checked={showSelectionMode}
              isDisabled
            />
            <DSText
              color={Color.SECONDARY}
              style={styles.text}
              type={Typography.BODY_DEFAULT_BOLD}
            >
              Select
            </DSText>
          </TouchableOpacity>

          {hasSelectedRepositories && (
            <TouchableOpacity onPress={onDeletePress}>
              <Trash2
                strokeWidth={2}
                color={Color.DANGER}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default RepositoryListHeader;
