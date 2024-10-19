import { StyleSheet } from 'react-native';

import { BorderRadius, Color, Spacing } from '@/ds';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: Spacing.MD,
    marginVertical: Spacing.XS,
    paddingHorizontal: Spacing.SM,
    paddingVertical: Spacing.XS,
    borderRadius: BorderRadius.MD,
    borderWidth: 2,
    borderColor: Color.SECONDARY,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: Spacing.SM,
  },
  checkBox: {
    marginRight: Spacing.SM,
  },
});

export default styles;
