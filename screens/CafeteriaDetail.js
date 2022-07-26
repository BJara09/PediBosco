import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../components/CafeteriaDetails/About";
import MenuItems from "../components/CafeteriaDetails/MenuItems";

export default function CafeteriaDetail({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
