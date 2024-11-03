import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import renderProductItem from "../components/RenderItemCard";
import styles from "../styles/MainStyle";

export default function Home({ navigation }) {
  const [hotDeals, setHotDeals] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;

        const hotDealsProducts = products.slice(0, 8);
        const newArrivalsProducts = products.slice(-8);

        setHotDeals(hotDealsProducts);
        setNewArrivals(newArrivalsProducts);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="tomato" />
        <Text>Loading your product...</Text>
      </View>
    );
  }

  // const renderProductItem = ({ item }) => (
  //   <View style={styles.productContainer}>
  //     <TouchableOpacity
  //       onPress={() =>
  //         navigation.navigate("ProductDetails", { product: item })
  //       }>
  //       <Image source={{ uri: item.image }} style={styles.productImage} />
  //     </TouchableOpacity>
  //     <Text style={styles.productName}>{item.title}</Text>
  //     <Text style={styles.price}>${item.price}</Text>

  //     {item.rating && (
  //       <View style={styles.ratingAndCartContainer}>
  //         <Text style={styles.rating}>
  //           {item.rating.rate}
  //           <Text style={styles.star}>★</Text> ({item.rating.count})
  //         </Text>
  //         <TouchableOpacity
  //           style={styles.addToCartButton}
  //           onPress={() => addToCart(item)}>
  //           <Icon name="add" size={20} color="white" />
  //         </TouchableOpacity>
  //       </View>
  //     )}
  //   </View>
  // );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Shop for quality, Shop for style</Text>
        <Image
          source={require("../assets/banner-image.png")}
          style={styles.bannerImage}
        />
      </View>

      {/* HOT DEALS Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          <Icon name="flame-outline" size={20} color="orange" /> HOT DEALS
        </Text>
        <FlatList
          data={hotDeals}
          renderItem={(item) => renderProductItem(item, navigation)}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      {/* NEW ARRIVALS Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          <Icon name="star-outline" size={20} color="gold" /> NEW ARRIVALS
        </Text>
        <FlatList
          data={newArrivals}
          renderItem={renderProductItem}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
  );
}
