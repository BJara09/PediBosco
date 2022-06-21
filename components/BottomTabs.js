import { View, Text } from "react-native";
import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function BottomTabs() {
  return (
    <View
      style={{
        height: 70,
        backgroundColor: "white",
        justifyContent: "space-around",
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <BottomTabsItems name="Browse" iconName="search" />
      <BottomTabsItems name="Home" iconName="gear" />
      <BottomTabsItems name="Account" iconName="user" />
      <BottomTabsItems name="Pepe" iconName="star" />
      <BottomTabsItems name="Lyis" iconName="tag" />
    </View>
  );
}

const BottomTabsItems = (props) => (
  <View style={{ padding: 15, justifyContent: "center", alignItems: "center" }}>
    <EvilIcons name={props.iconName} size={25} color="#000" />
    <Text>{props.name}</Text>
  </View>
);
