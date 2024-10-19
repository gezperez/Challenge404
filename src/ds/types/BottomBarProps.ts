import { JSX } from 'react';

import ButtonProps from './ButtonProps';

type BottomBarProps = {
  buttonProps: ButtonProps;
  renderContent: () => JSX.Element;
};

export default BottomBarProps;
