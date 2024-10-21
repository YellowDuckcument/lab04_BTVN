import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import CardCategory from "./CardCategory";

const gapStyle = () => {
  return (
    <View>
      <View
        style={{ backgroundColor: "blue", justifyContent: "space-between" }}
      />
    </View>
  );
};

const HeaderCate = ({ dataItems }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        horizontal={true}
        data={dataItems}
        renderItem={CardCategory}
        contentContainerStyle={{
          justifyContent: "space-around", // Dàn đều các item
          flexGrow: 1, // Đảm bảo không có khoảng trống dư thừa
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default HeaderCate;
