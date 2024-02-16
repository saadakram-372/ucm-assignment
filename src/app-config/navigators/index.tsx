import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MoviesListScreen } from "../../features/home/screens/MoviesListScreen";

// Screens

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  gestureEnabled: false,
  cardOverlayEnabled: true,
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="movies" screenOptions={screenOptions}>
      <Stack.Screen name="movies" component={MoviesListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
