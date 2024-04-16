import * as React from "react";
import { Button, View, Text, ScrollView, Dropdown } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./pages/components/tabs/Home";
import Login from "./pages/Login";
import Settings from "./pages/components/tabs/Settings";
import Lesson from "./pages/components/tabs/Lesson";
import Profile from "./pages/components/tabs/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let username = "Баяржавхлан";
const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={({ navigation }) => ({
              title: `Өдрийн мэнд ${username}`,
              headerStyle: {
                backgroundColor: "rgba(130,35,33,255)",
              },
              headerTitleStyle: {
                fontSize: 16,
              },
              headerTintColor: "white",
              headerRight: () => <Text> W W</Text>,
            })}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ title: "Нүүр", headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Нүүр", headerShown: false }}
      />
      <Tab.Screen
        name="Lesson"
        component={Lesson}
        options={{ title: "Нүүр", headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Нүүр", headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default App;
// #alice public 23 bob public key 9 harin aliceiin private key ni 4 bobinh bolhoro 3
// P - alice public  G- bob public
// a - a priv b b priv
// x гэсэн нэг за зургийн самбараас авсан2
