import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const HeaderCate = ({ dataItems }) => {
  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  };

  const ProductList = () => {
    const groupedProducts = groupProductsByCategory(products);
  };
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={{ color: "red", fontSize: 12 }}>{item.category}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dataItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HeaderCate;
