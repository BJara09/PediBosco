import { View, Text, Image } from "react-native";
import React from "react";

/*const CafeteriaInfo = {
  name: "Soda DonK",
  description: "Rápido · Chifrijo · Batidos",
  image:
    "https://th.bing.com/th/id/OIP.x_bLp2JXWP8HVFl2iyGe4QHaEK?pid=ImgDet&rs=1",
};

const { name, description, image } = CafeteriaInfo;*/

export default function About(props) {
  const { name, place, image } = props.route.params;
  return (
    <View>
      <CafeteriaImage image={image} />
      <CafeteriaTitle name={name} />
      <CafeteriaDescription place={place} />
    </View>
  );
}

const CafeteriaImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const CafeteriaTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.name}
    </Text>
  );
};

const CafeteriaDescription = (props) => {
  return (
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: "400",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {props.place}
    </Text>
  );
};
