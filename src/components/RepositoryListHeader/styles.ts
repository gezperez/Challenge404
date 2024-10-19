import { StyleSheet } from 'react-native';

import { Color, Spacing } from '@/ds';

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 1,
    borderColor: Color.PRIMARY,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: Spacing.XS,
    paddingVertical: Spacing.SM,
    margin: Spacing.MD,
    marginBottom: Spacing.XS,
  },
  button: {
    marginHorizontal: Spacing.XS,
  },
  inputContainer: {
    margin: Spacing.MD,
    marginVertical: Spacing.SM,
  },
  input: {
    marginHorizontal: Spacing.XS,
    marginBottom: Spacing.SM,
  },
  buttonContainer: {
    marginHorizontal: 28,
    marginBottom: Spacing.SM,
    marginTop: Spacing.XS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: Spacing.XS,
  },
});

export default styles;
