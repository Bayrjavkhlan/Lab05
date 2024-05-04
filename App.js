import * as React from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  Dropdown,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabView, TabBar } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";

import Main from "./pages/components/tabs/Home";
import Login from "./pages/Login";
import Settings from "./pages/components/tabs/Schedule";
import LessonTab from "./pages/components/tabs/LessonTab";
import Profile from "./pages/components/tabs/Profile";

import Performance from "./pages/components/topTabs/Performance";
import LessonMaterial from "./pages/components/topTabs/LessonMaterial";

import Lecture from "./pages/components/lessonType/Lecture";
import Homework from "./pages/components/lessonType/Homework";
import Seminar from "./pages/components/lessonType/Seminar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

let username = "Баяржавхлан";
let lessonName = "Хиймэл оюун ухаан";

function LessonMaterialFilter() {}
const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="Home">
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
              headerRight: () => (
                <>
                  <Ionicons
                    name="notifications"
                    size={18}
                    color={"#fff"}
                    style={{ marginRight: 15 }}
                  />
                  <Ionicons name="settings" size={18} color={"#fff"} />
                </>
              ),
            })}
          />
          <Stack.Screen
            name="Lesson"
            component={TopTabNavigator}
            options={({ route, navigation }) => ({
              title: route.params.lessonName,
              headerStyle: {
                backgroundColor: "rgba(130,35,33,255)",
              },
              headerTitleStyle: {
                fontSize: 18,
                color: "white",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTitleContainerStyle: {
                justifyContent: "center",
              },
            })}
          />
          <Stack.Screen
            name="Lecture"
            component={Lecture}
            options={({ route, navigation }) => ({
              title: route.params.lectureName,
              headerStyle: {
                backgroundColor: "rgba(130,35,33,255)",
              },
              headerTitleStyle: {
                fontSize: 18,
                color: "white",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTitleContainerStyle: {
                justifyContent: "center",
              },
            })}
          />
          <Stack.Screen
            name="Seminar"
            component={Seminar}
            options={({ route, navigation }) => ({
              title: route.params.seminarName,
              headerStyle: {
                backgroundColor: "rgba(130,35,33,255)",
              },
              headerTitleStyle: {
                fontSize: 18,
                color: "white",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTitleContainerStyle: {
                justifyContent: "center",
              },
            })}
          />
          <Stack.Screen
            name="Homework"
            component={Homework}
            options={({ route, navigation }) => ({
              // title: route.params.homeWorkName,
              title: "Хичээлийн нэр",
              headerStyle: {
                backgroundColor: "rgba(130,35,33,255)",
              },
              headerTitleStyle: {
                fontSize: 18,
                color: "white",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              headerTitleContainerStyle: {
                justifyContent: "center",
              },
            })}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "rgba(130,35,33,255)",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          padding: 3,
        },
      })}
    >
      <TopTab.Screen
        name="LessonMaterial"
        component={LessonMaterial}
        options={{
          title: "Материал",
          headerShown: false,
        }}
      />
      <TopTab.Screen
        name="Performance"
        component={Performance}
        options={{
          title: "Явц",
          headerShown: false,
        }}
      />
    </TopTab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "rgba(130,35,33,255)",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          paddingBottom: 10,
          height: 65,
          paddingTop: 7,
        },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = "home";
          } else if (route.name === "Settings") {
            iconName = "calendar";
          } else if (route.name === "LessonTab") {
            iconName = "book";
          } else if (route.name === "Profile") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          title: "Нүүр",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Хуваарь",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LessonTab"
        component={LessonTab}
        options={{
          title: "Хичээл",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Пропайл",
          tabBarLabelStyle: { fontSize: 14 },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default App;
{
  /* {({ navigation, route }) => (
              <View style={{ flex: 1 }}>
                <TabView
                  renderScene={renderScene}
                  onIndexChange={setIndex}
                  initialLayout={{ width: Dimensions.get("window").width }}
                  renderTabBar={(props) => (
                    <TabBar
                      {...props}
                      indicatorStyle={{ backgroundColor: "white" }}
                      style={{ backgroundColor: "rgba(130,35,33,255)" }}
                      labelStyle={{ color: "white" }}
                    />
                  )}
                />
              </View>
            )} */
}
{
  /* </Stack.Screen> */
}
