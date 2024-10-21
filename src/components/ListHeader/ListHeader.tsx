import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { SquareMousePointer, SquarePen, Trash2 } from 'lucide-react-native';

import styles from './styles';

import { Color, DSInput, DSText, Typography } from '@/ds';

type ListHeaderProps = {
  onChangeText: (text: string) => void;
  onDeletePress: () => void;
  onPressSelectionMode: () => void;
  showButtons: boolean;
  showDeleteButton: boolean;
  isSelectionMode: boolean;
  inputError?: string;
};

const ListHeader = ({
  onChangeText,
  onDeletePress,
  onPressSelectionMode,
  showButtons,
  showDeleteButton,
  isSelectionMode,
  inputError,
}: ListHeaderProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <DSInput
          placeholder="Search repositories"
          onChangeText={onChangeText}
          errorMessage={inputError}
        />
      </View>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.checkContainer}
            onPress={onPressSelectionMode}
          >
            {isSelectionMode ? (
              <SquarePen
                strokeWidth={3}
                color={Color.SECONDARY}
              />
            ) : (
              <SquareMousePointer
                strokeWidth={3}
                color={Color.SECONDARY}
              />
            )}
            <DSText
              color={Color.SECONDARY}
              style={styles.text}
              type={Typography.BODY_DEFAULT_BOLD}
            >
              Select
            </DSText>
          </TouchableOpacity>

          {showDeleteButton && (
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

export default ListHeader;
