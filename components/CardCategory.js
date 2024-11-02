import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { CartContext } from "../context/CartContext";

const CardCategory = ({ item, index }) => {
  // const { category, setCategory } = useState("");
  // const { setCategory } = useContext(CartContext);

  const renderItemContent = (index) => {
    switch (index) {
      case 0:
        return (
          <MaterialIcons name="electrical-services" size={40} color="black" />
        );
      case 1:
        return (
          <MaterialCommunityIcons name="necklace" size={40} color="black" />
        );
      case 2:
        return <Ionicons name="man-outline" size={40} color="black" />;
      case 3:
        return <Ionicons name="woman-outline" size={40} color="black" />;
    }
  };

  return (
    <TouchableOpacity
    // onPress={() => handleCategorySelect(item)}
    >
      <View
        style={{
          padding: 8,
          width: 90, // Chiều rộng của item
          height: 100, // Chiều rộng của item
          flex: 1, // Mỗi item chiếm không gian đều nhau
          borderWidth: 1, //
          borderColor: "red",
          borderRadius: 10,
          alignItems: "center",
          // justifyContent: "flex-end",
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
          }}>
          {renderItemContent(index)}
        </View>
        <Text
          style={{
            fontSize: 10,
            flexWrap: "wrap",
            textAlign: "center",
            textTransform: "uppercase",
          }}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardCategory;
