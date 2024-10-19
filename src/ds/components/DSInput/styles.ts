import { StyleSheet } from 'react-native';

import { BorderRadius, Color, Spacing } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1.5,
    borderColor: Color.SECONDARY,
    borderRadius: BorderRadius.INFINITE,
    height: 54,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    color: Color.SECONDARY,
  },
  icon: {
    marginRight: Spacing.MD,
  },
});

export default styles;
