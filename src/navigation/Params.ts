import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  Home?: {};
};

export type ScreenRootProp = NativeStackNavigationProp<RootStackParamsList>;

export type StackList = keyof RootStackParamsList;
