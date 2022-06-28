import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import CafeteriaItems from "../components/CafeteriaItems";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <CafeteriaItems />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
