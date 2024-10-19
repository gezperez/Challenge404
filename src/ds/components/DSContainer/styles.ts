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
  button: {
    marginLeft: Spacing.SM,
  },
  bottomBarContainer: {
    borderTopWidth: 0.5,
    borderColor: Color.SECONDARY,
    paddingHorizontal: Spacing.MD,
    paddingTop: Spacing.XS,
    paddingBottom: Platform.OS === 'android' ? Spacing.SM : 0,
  },
  renderContainer: {
    marginBottom: Spacing.XS,
  },
});

export default styles;
