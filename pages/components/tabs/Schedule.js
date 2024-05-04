import React from "react";
import { Button, View, Text, ScrollView, Dropdown } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Schedule</Text>
      </View>
    </View>
  );
}
