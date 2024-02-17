import React from "react";

// Libraries
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import { MovieDetailScreen } from "../../features/details";
import { MoviesListScreen } from "../../features/home/screens/MoviesListScreen";
import { MoviesSerializedType } from "../../features/home/types";

export type AllScreenParams = {
  movies: undefined;
  movieDetail: MoviesSerializedType;
};

const Stack = createStackNavigator<AllScreenParams>();

const screenOptions = {
  gestureEnabled: false,
  cardOverlayEnabled: true,
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="movies" screenOptions={screenOptions}>
      <Stack.Screen
        name="movies"
        component={MoviesListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="movieDetail"
        component={MovieDetailScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
