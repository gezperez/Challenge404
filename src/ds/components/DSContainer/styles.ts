import { Platform, StyleSheet } from 'react-native';

import { Color, Spacing } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
  },
  bottomBarContainer: {
    backgroundColor: Color.WHITE,
  },
  bottomBarInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.SM,
    paddingBottom: Platform.OS === 'android' ? Spacing.MD : 0,
  },
  button: {
    marginLeft: Spacing.SM,
  },
});

export default styles;
