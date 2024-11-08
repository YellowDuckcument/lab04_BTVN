import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Categories from "./Categories";
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import { CartContext, CartProvider } from "../context/CartContext";
import { useContext } from "react";

const Tab = createBottomTabNavigator();

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
export default function MainPage() {
  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Cart")
              return <CartIconWithBadge color={color} size={size} />;
            const iconMap = {
              Home: "home",
              Categories: "list",
              Profile: "person",
            };
            return (
              <Icon name={iconMap[route.name]} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </CartProvider>
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
