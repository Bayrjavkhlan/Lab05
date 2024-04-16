import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import tableData from "../../jsonData/tableData.json";

const TableCell = ({ text, style }) => (
  <View style={[styles.cell, style]}>
    <Text>{text}</Text>
  </View>
);

const Table = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      contentContainerStyle={{ flexDirection: "row" }}
    >
      <ScrollView>
        {Object.keys(tableData).map((rowKey, rowIndex) => (
          <View
            key={rowIndex}
            style={[styles.row, rowIndex === 0 ? styles.firstRow : null]}
          >
            <TableCell text={tableData[rowKey]["cell1"]} style={styles.cell1} />
            <TableCell text={tableData[rowKey]["cell2"]} />
            <TableCell text={tableData[rowKey]["cell3"]} />
            <TableCell text={tableData[rowKey]["cell4"]} />
            <TableCell text={tableData[rowKey]["cell5"]} />
            <TableCell text={tableData[rowKey]["cell6"]} />
            <TableCell text={tableData[rowKey]["cell7"]} />
            <TableCell text={tableData[rowKey]["cell8"]} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 10,
    width: 150,
    height: 110,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#e4eaec",
    alignItems: "center",
    justifyContent: "center",
  },
  firstRow: {
    height: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e4eaec",
  },
  cell1: { width: 100, backgroundColor: "#c3d2d5" },
});

export default Table;
