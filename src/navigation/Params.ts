import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home?: {};
  SelectedRepositories?: {};
};

export type ScreenRootProp = NativeStackNavigationProp<RootStackParamsList>;

export type StackList = keyof RootStackParamsList;
