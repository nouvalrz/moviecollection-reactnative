import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailMovieScreen from "../screens/DetailMovieScreen";
import MostViewedScreen from "../screens/MostViewedScreen";
import RecommendedScreen from "../screens/RecommendedScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: true,
          title: "Movie Collection",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#65c3ba'
          },
          headerTitleStyle: {
            fontSize: 24
          }
        }} />
        <Stack.Screen name="DetailMovie" component={DetailMovieScreen} options={{
          headerShown: true,
          title: "Detail",
          headerStyle: {
            backgroundColor: '#65c3ba'
          },
          headerTitleStyle: {
            fontSize: 24
          },
          headerLeft: null
        }} />
        <Stack.Screen name="MostViewed" component={MostViewedScreen} options={{
          headerShown: true,
          title: "Most Viewed",
          headerStyle: {
            backgroundColor: '#65c3ba'
          },
          headerTitleStyle: {
            fontSize: 24
          },
          headerLeft: null
        }} />
        <Stack.Screen name="Recommended" component={RecommendedScreen} options={{
          headerShown: true,
          title: "Recommended",
          headerStyle: {
            backgroundColor: '#65c3ba'
          },
          headerTitleStyle: {
            fontSize: 24
          },
          headerLeft: null
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;