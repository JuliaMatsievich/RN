import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen.tsx';
import FeedScreen from '../screens/FeedScreen.tsx';
import ProfileScreen from '../screens/ProfileScreen.tsx';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: () => {
          // let iconName;
          //
          // if (route.name === 'Favorites') {
          //   iconName = focused
          //     ? 'ios-information-circle'
          //     : 'ios-information-circle-outline';
          // } else if (route.name === 'Feed') {
          //   iconName = focused ? 'ios-list' : 'ios-list-outline';
          // }

          // You can return any component that you like here!
          return (
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
