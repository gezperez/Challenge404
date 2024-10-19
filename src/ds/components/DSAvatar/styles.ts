import { StyleSheet } from 'react-native';

import { BorderRadius, Color } from '@/ds/constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.INFINITE,
    backgroundColor: Color.GRAY,
    height: 54,
    width: 54,
    overflow: 'hidden',
  },
  avatar: {
    width: 54,
    height: 54,
  },
});

export default styles;
