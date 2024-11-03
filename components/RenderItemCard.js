import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
// import styles from "../styles/MainStyle";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/MainStyle";

const renderProductItem = ({ item }, navigation) => (
  <View style={styles.productContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
    </TouchableOpacity>
    <Text style={styles.productName}>{item.title}</Text>
    <Text style={styles.price}>${item.price}</Text>

    {item.rating && (
      <View style={styles.ratingAndCartContainer}>
        <Text style={styles.rating}>
          {item.rating.rate}
          <Text style={styles.star}>★</Text> ({item.rating.count})
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => addToCart(item)}>
          <Icon name="add" size={20} color="white" />
        </TouchableOpacity>
      </View>
    )}
  </View>
);

export default renderProductItem;
