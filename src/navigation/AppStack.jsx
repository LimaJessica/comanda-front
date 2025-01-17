import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Home from "../screens/Home";
import ShoppingCart from "../screens/ShoppingCart";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mesas from "../screens/Mesas";
import Lista from "../screens/Lista";
import UpdateScreen from "../screens/UpdateScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Mesas"
        component={Mesas}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Lista"
        component={Lista}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UpdateScreen"
        component={UpdateScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
