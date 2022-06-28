import { View, Text } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View
      style={{
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <BottomTabsItems text="Inicio" iconName="home" />
      <BottomTabsItems text="Buscar" iconName="search" />
      <BottomTabsItems text="Compras" iconName="shopping-bag" />
      <BottomTabsItems text="Ordenes" iconName="receipt" />
      <BottomTabsItems text="Cuenta" iconName="user" />
    </View>
  );
}

const BottomTabsItems = (props) => (
  <View>
    <FontAwesome5
      name={props.iconName}
      size={20}
      style={{ marginBottom: 3, alignSelf: "center" }}
    />
    <Text>{props.text}</Text>
  </View>
);
