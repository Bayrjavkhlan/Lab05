import React from "react";
import { Button, View, Text, ScrollView, Dropdown } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Table from "../../turHadgalah.js/table";
// import { PickerSelect } from "react-native-picker-select";

export default function Lesson({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Lesson</Text>

        {/* <Table></Table> */}
      </View>
    </View>
  );
}
