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
  button: {
    marginLeft: Spacing.SM,
  },
  inputContainer: {
    borderTopWidth: 0.5,
    borderColor: Color.SECONDARY,
    paddingHorizontal: Spacing.MD,
    paddingTop: Spacing.XS,
    paddingBottom: Platform.OS === 'android' ? Spacing.XS : 0,
  },
});

export default styles;
