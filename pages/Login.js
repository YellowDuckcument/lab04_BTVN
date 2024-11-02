import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [matkhau, ganmatkhau] = useState("");
  const [tendn, gantendn] = useState("");
  const [nguoidung, gannguoidung] = useState({ tennd: "" });
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://cdn.icon-icons.com/icons2/2429/PNG/512/shopify_logo_icon_147240.png",
        }}
        style={styles.img}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <Text>Tên Đăng nhập</Text>
      <TextInput value={tendn} onChangeText={gantendn} style={styles.input} />
      <Text>Mật Khẩu</Text>
      <TextInput
        value={matkhau}
        onChangeText={ganmatkhau}
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MainPage")}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 200,
    borderColor: "white",
    borderWidth: 1,
    margin: 24,
  },
  input: {
    borderColor: "gray",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    width: "70%",
    padding: 10,
    marginBottom: 10,
    marginTop: 4,
  },
  button: {
    backgroundColor: "#495DAC",
    padding: 10,
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Login;
