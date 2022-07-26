import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import CafeteriaItems, { sodas } from "../components/Home/CafeteriaItems";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements";
import HeaderTabs from "../components/Home/HeaderTabs";
import Categories from "../components/Home/Categories";

export default function Home({ navigation }) {
  /*const [cafeteriaData, setCafeteriaData] = useState(sodas);*/

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />

        <CafeteriaItems
          /*cafeteriaData={cafeteriaData}*/ navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
