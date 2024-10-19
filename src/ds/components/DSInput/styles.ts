import { StyleSheet } from 'react-native';

import { BorderRadius, Color, Spacing } from '@/ds/constants';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginBottom: Spacing.XS,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: BorderRadius.INFINITE,
    borderColor: Color.SECONDARY,
  },
  errorStyle: {
    borderColor: Color.DANGER,
  },
  input: {
    flex: 1,
    minHeight: 60,
    padding: 16,
  },
  descriptionText: {
    marginTop: Spacing.XS,
    marginLeft: Spacing.MD,
  },
});

export default styles;
