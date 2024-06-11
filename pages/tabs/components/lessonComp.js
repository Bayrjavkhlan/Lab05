import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const TestComp = ({ lessonName, teacherName, imgPath }) => {
  return (
    <View style={styles.horizontalContainer}>
      <View style={styles.container}>
        <Image source={imgPath} style={styles.img} resizeMode="cover" />
        <Text style={styles.lessonName}>{lessonName}</Text>
        <Text style={styles.teacherName}>{teacherName}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  customTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 180,
    height: 120,
    // borderColor: "#000",
    // borderWidth: 1,
    borderRadius: 10,
  },
  newsImg: {
    width: 360,
    height: 240,
    borderRadius: 20,
    marginRight: 10,
  },
  newsTitle: {
    width: 360,
    height: 50,
    fontSize: 16,
    fontWeight: "600",
    flexWrap: "wrap",
    textAlign: "left",
  },
  lessonName: { fontSize: 17 },
  teacherName: { fontSize: 15 },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    marginBottom: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
});

export default TestComp;
