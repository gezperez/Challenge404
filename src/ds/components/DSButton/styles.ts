import { StyleSheet } from 'react-native';

import { BorderRadius, Color, Spacing } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.INFINITE,
    backgroundColor: Color.SECONDARY,
    paddingVertical: Spacing.SM,
    paddingHorizontal: Spacing.MD,
    minHeight: 60,
  },
});

export default styles;
