import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import { MyContextProvider } from "./context/MyContext";
import Login from "./pages/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./pages/MainPage";
import { CartProvider } from "./context/CartContext";

const Stack = createNativeStackNavigator();

function CartIconWithBadge({ color, size }) {
  const { badgeCount } = useContext(CartContext);
  return (
    <View>
      <Icon name="cart-outline" size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}
export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }} // Tắt tiêu đề cho MainPage
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
