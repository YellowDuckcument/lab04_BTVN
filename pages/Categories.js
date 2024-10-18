import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderCate from "../components/HeaderCate";

const Categories = () => {
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setDataItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <HeaderCate dataItems={dataItems} />
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;
