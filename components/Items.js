import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import renderProductItem from "./RenderItemCard";

const Items = ({ category }) => {
  const [categories, setCategories] = useState([]); // Danh sách category
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [activeCategory, setActiveCategory] = useState(null); // Danh mục đang active
  const [scrollY, setScrollY] = useState(0); // Vị trí scroll hiện tại

  // Lấy danh sách categories từ API
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  // Lấy danh sách products từ API
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, [category]);

  // Hàm xử lý scroll để tính toán danh mục nào đang được focus
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setScrollY(scrollPosition);

    // Tính toán vị trí danh mục nào đang được focus
    categories.forEach((category, index) => {
      const categoryPosition = index * 300; // Giả sử mỗi category chiếm 300px
      if (
        scrollPosition >= categoryPosition &&
        scrollPosition < categoryPosition + 300
      ) {
        setActiveCategory(category);
      }
    });
  };

  return (
    <View>
      {/* ScrollView chứa danh sách sản phẩm */}
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={{ paddingVertical: 20 }}>
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

// HeaderCate hiển thị các nút category
const HeaderCate = ({ dataItems, activeCategory, setActiveCategory }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <FlatList
        horizontal={true}
        data={dataItems}
        renderItem={({ item }) => (
          <CategoryButton
            category={item}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          justifyContent: "space-around",
          flexGrow: 1,
        }}
      />
    </View>
  );
};

// CategoryButton là button của từng category
const CategoryButton = ({ category, activeCategory, setActiveCategory }) => {
  const isActive = category === activeCategory; // Kiểm tra xem có phải category đang active hay không
  return (
    <Text
      onPress={() => setActiveCategory(category)}
      style={{
        padding: 10,
        backgroundColor: isActive ? "blue" : "gray", // Đổi màu khi active
        color: "white",
        borderRadius: 5,
        margin: 5,
      }}>
      {category}
    </Text>
  );
};

// ProductItem hiển thị mỗi sản phẩm
const ProductItem = ({ item }) => {
  return (
    <View
      style={{
        margin: 10,
        width: 180,
        height: 200,
        backgroundColor: "gray",
        borderRadius: 15,
      }}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default Items;
