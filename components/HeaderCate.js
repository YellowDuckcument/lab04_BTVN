import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
// import CardCategory from "./CardCategory";

const CardCategory = ({ item, index, handleCategorySelect }) => {
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
    <TouchableOpacity onPress={() => handleCategorySelect(item)}>
      <View
        style={{
          padding: 8,
          width: 90, // Chiều rộng của item
          height: 100, // Chiều cao của item
          borderWidth: 1,
          borderColor: "red",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center", // Căn giữa nội dung
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

const HeaderCate = ({ dataItems, handleCategorySelect }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        horizontal={true}
        data={dataItems}
        renderItem={({ item, index }) => (
          <CardCategory
            item={item}
            index={index}
            handleCategorySelect={handleCategorySelect}
          />
        )}
        contentContainerStyle={{
          justifyContent: "space-around", // Dàn đều các item
          flexGrow: 1, // Đảm bảo không có khoảng trống dư thừa
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default HeaderCate;
