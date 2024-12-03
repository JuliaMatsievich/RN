import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeAppProvider } from 'components/ThemeAppProvider.tsx';
import React from 'react';
import AuthorizationScreen from 'screens/AuthorizationScreen.tsx';
import CodeScreen from 'screens/CodeScreen.tsx';
import HelloScreen from 'screens/HelloScreen.tsx';
import HomeTabs from 'tabs/HomeTabs.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <ThemeAppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
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
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Code" component={CodeScreen} />
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeAppProvider>
  );
}

export default App;
