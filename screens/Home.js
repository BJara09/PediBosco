import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import CafeteriaItem from "../components/CafeteriaItems";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <CafeteriaItem
          name="Soda DonK"
          place="Nos ubicamos a un costado de las cancha"
          imguri="https://th.bing.com/th/id/OIP.x_bLp2JXWP8HVFl2iyGe4QHaEK?pid=ImgDet&rs=1"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
