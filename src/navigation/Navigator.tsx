import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { RootStackParamsList } from './Params';
import { navigationRef } from './RootNavigation';

import { Color, TypographyVariant } from '@/ds';
import { HomeScreen } from '@/screens';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const screenOptions: NativeStackNavigationOptions = {
  headerTitleStyle: {
    ...TypographyVariant.bodyLargeBold,
    color: Color.SECONDARY,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Repositories',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
