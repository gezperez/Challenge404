import { StyleSheet } from 'react-native';

import { BorderRadius, Color } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.SM,
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Color.SECONDARY,
  },
  unchecked: {
    padding: 8,
    borderRadius: BorderRadius.INFINITE,
  },
  checkedStyle: {
    backgroundColor: Color.SECONDARY,
  },
});

export default styles;
