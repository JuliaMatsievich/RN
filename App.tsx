import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppTheme } from 'hooks/useAppTheme.tsx';
import React from 'react';
import AuthorizationScreen from 'screens/AuthorizationScreen.tsx';
import CodeScreen from 'screens/CodeScreen.tsx';
import HelloScreen from 'screens/HelloScreen.tsx';
import HomeTabs from 'tabs/HomeTabs.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const { theme, themeName } = useAppTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          contentStyle: {
            backgroundColor: theme.background,
          },
          statusBarBackgroundColor: theme.background,
          statusBarStyle: themeName === 'dark' ? 'light' : 'dark',
          navigationBarColor: theme.navigationBarColor,
        }}
      >
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authorization"
          component={AuthorizationScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: '',
            headerStyle: {
              backgroundColor: theme.background,
            },
          }}
        />
        <Stack.Screen
          name="Code"
          component={CodeScreen}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTintColor: theme.text,
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerBackButtonDisplayMode: 'generic',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
