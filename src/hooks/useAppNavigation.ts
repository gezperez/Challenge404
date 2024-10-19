import { useNavigation } from '@react-navigation/native';

import { ScreenRootProp } from '@/navigation/Params';

const useCustomNavigation = () => useNavigation<ScreenRootProp>();

export default useCustomNavigation;
