import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productContainer: {
    width: "48%",
    flexDirection: "column",
    marginBottom: 10,
    marginHorizontal: "1%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20, // Khoảng cách dưới
    textAlign: "center", // Căn giữa
    fontStyle: "italic", // In nghiêng
    color: "red",
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  bannerImage: {
    width: "100%", // Kích thước chiều rộng bằng 100% khung hình
    height: 250, // Kích thước chiều cao cố định (có thể điều chỉnh theo nhu cầu)
  },
  productName: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingAndCartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  rating: {
    fontSize: 20,
    color: "black",
  },
  star: {
    fontSize: 25,
    color: "gold",
  },
  addToCartButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  flatListContent: {
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 20, // Kích thước chữ cho tiêu đề
    fontWeight: "bold", // In đậm
    color: "red", // Màu chữ
    textTransform: "uppercase",
    letterSpacing: 1, // Khoảng cách giữa các chữ
    padding: 20, // Khoảng cách giữa các phần tử
  },
});

export default styles;
