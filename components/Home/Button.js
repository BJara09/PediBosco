import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alert, AppRegistry, Button, StyleSheet, View } from "react-native";

/* const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>    
    </NavigationContainer>
  );
};
*/

import { View, Text } from "react-native";
import React from "react";

export default function ButtonBasics() {
  const onPressButton = () => {
    Alert.alert("Veamos el inventario");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={this.onPressButton} title="Soda Don K" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={this.onPressButton} title="Soda Liz" color="#009933" />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={this.onPressButton} title="Soda Liz" color="yellow" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
