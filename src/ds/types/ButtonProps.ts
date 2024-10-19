import { StyleProp, ViewStyle } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export default ButtonProps;
