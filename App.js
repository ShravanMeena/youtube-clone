import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Home from './src/screens/Home'
import Search from './src/screens/Search'
import videoplayer from './src/screens/VideoPlayer'
import Subscribe from './src/screens/Subcribe'
import Explore from './src/screens/Explore'


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer }  from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return(
  <Tabs.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = 'home';
            } else if (route.name === 'explore') {
              iconName = 'explore';
            }else if(route.name === 'subscribe') {
              iconName = 'subscriptions'
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
  >

    <Tabs.Screen name="home" component={Home} />
    <Tabs.Screen name="explore" component={Explore} />
    <Tabs.Screen name="subscribe" component={Subscribe} />

  </Tabs.Navigator>)
}


function App()  {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="rootHome" component={RootHome} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="videoplayer" component={VideoPlayer} />
            <Stack.Screen name="Subscribe" component={Subscribe} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default App