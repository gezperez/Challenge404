import { StyleSheet } from 'react-native';

import { BorderRadius, Color, Spacing } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: BorderRadius.INFINITE,
    backgroundColor: Color.PRIMARY,
    height: 54,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    color: Color.WHITE,
  },
  icon: {
    marginRight: Spacing.MD,
  },
});

export default styles;
