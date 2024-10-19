import { StyleProp, ViewStyle } from 'react-native';

import { icons } from 'lucide-react-native';

type IconProps = {
  name?: keyof typeof icons;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export default IconProps;
