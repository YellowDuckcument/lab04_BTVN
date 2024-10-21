import { View, Text } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Items = () => {
  const [dataItems, setDataItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null); // Lưu danh mục đang hiển thị
  const [loading, setLoading] = useState(true);

  const getproductsBycategory = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/" + category
      );
      setProducts(response.data);
      setDataItems(category);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  useEffect(() => {
    getproductsBycategory();
  }, []);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    // Logics tính toán để xác định danh mục nào đang ở vị trí hiện tại.
    // Bạn có thể sử dụng chiều cao của từng danh mục để xác định activeCategory.
  };

  return (
    <View>
      <HeaderCate
        dataItems={dataItems}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {dataItems.map((category, index) => (
          <View key={index} style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{category}</Text>
            <FlatList
              data={products.filter((product) => product.category === category)}
              renderItem={({ item }) => <ProductItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true} // Nếu muốn hiển thị ngang
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Items;
