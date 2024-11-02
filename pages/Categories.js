import { View, Text, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import HeaderCate from "../components/HeaderCate";
import Items from "../components/Items";
import axios from "axios";
// import { CartContext } from "../context/CartContext";

const Categories = () => {
  // const { category, setCategory } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
        console.log(response.data); // Kiểm tra dữ liệu từ API
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false); // Đảm bảo rằng loading luôn được đặt về false sau khi gọi API
      }
    };
    getCategories();
  }, []); // Để mảng phụ thuộc trống để chạy một lần khi mount

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); // Hiển thị spinner khi đang tải
  }

  const handleCategorySelect = (category) => {
    setCategory(category); // Thay đoi category khi chọn danh mục
  };

  return (
    <View>
      {categories.length > 0 ? (
        <HeaderCate
          dataItems={categories}
          handleCategorySelect={handleCategorySelect}
        />
      ) : (
        <Text>No categories found.</Text> // Thông báo nếu không có danh mục nào
      )}
      <Items category={category} />
    </View>
  );
};

export default Categories;
