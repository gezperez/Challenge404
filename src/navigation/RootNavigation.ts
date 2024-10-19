import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const RootNavigation = () => {
  if (navigationRef.isReady()) {
    return navigationRef;
  }

  return undefined;
};

export default RootNavigation;
