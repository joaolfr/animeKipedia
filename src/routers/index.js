import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { fromLeft } from 'react-navigation-transitions';

import {Home, Favorites, Detail, Profile} from 'src/screens';
import TabBar from 'src/components/TabBar';

const navTheme = DefaultTheme;
navTheme.colors.background = '#0e1c1d';

const Router = () => {
  const Tab = createBottomTabNavigator();
  
  
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props}  />}>
        <Tab.Screen name="Profile" component={Profile}  />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
