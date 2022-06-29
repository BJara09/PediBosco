import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./screens/Home";
import CafeteriaDetail from "./screens/CafeteriaDetail";

export default function Rootnavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CafeteriaDetail" component={CafeteriaDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
