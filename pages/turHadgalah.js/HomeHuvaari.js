import React from "react";
import { Button, View, Text, ScrollView, Dropdown } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Table from "./components/table";
import Day1 from "./components/scheduleDays/day1";
import Day2 from "./components/scheduleDays/day2";
import Day3 from "./components/scheduleDays/day3";
import Day4 from "./components/scheduleDays/day4";
import Day5 from "./components/scheduleDays/day5";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }) {
  const TodayDay = new Date().getDate;

  const weekDay = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"];
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "top",
          alignItems: "justifyContent",
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 11,
            },
          }}
        >
          {for(int i = 0 , i < weekDay.length() , i++){
                      <Tab.Screen
                      name={`Day ${i+1}`}
                      component={Day1}
                      options={{ title: `${weekday[i]} \n ${TodayDay + 1} ` }}
                    />
          }}

        </Tab.Navigator>
      </View>
    </View>
  );
}
