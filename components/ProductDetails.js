import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const { product, additionalParam } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.label}>
        Price: <Text style={styles.price}> ${product.price}</Text>{" "}
      </Text>
      {/* Rating display */}
      {product.rating && (
        <View style={styles.ratingAndCartContainer}>
          <Text style={styles.label}>
            Rating:{" "}
            <Text style={styles.rating}>
              {product.rating.rate}
              <Text style={styles.star}>★</Text>({product.rating.count} reviews)
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    width: 300,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  rating: {
    fontSize: 20,
    color: "black",
  },
  star: {
    fontSize: 30,
    color: "gold",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});

export default ProductDetails;
