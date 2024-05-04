import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default DropdownList = ({ data, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.container}
      >
        <View style={styles.smallContainer}>
          <Text style={styles.listText}>{title}</Text>
          <Text>{data[data.length - 1][1]}</Text>
        </View>

        <Ionicons name="chevron-down" size={25} color={"#822315"} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.table}>
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, cellIndex) => (
                <Text key={cellIndex} style={styles.cell}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  smallContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 5,
    marginBottom: 5,
  },
  listText: { fontSize: 18, marginRight: 10, marginBottom: 10 },
  listItem: { flexDirection: "row", justifyContent: "space-between" },
  listItemsFirst: { fontSize: 16, marginLeft: 20, width: "50%" },
  listItemsLast: { fontSize: 20 },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    padding: 10,
    flex: 1,
    textAlign: "center",
  },
});
