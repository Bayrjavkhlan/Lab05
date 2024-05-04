import React from "react";
import { Button, View, Text, ScrollView, Dropdown } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Profile</Text>
      </View>
    </View>
  );
}
