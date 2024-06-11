import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const LessonComponent = ({
  lessonName,
  teacherName,
  lessonCode,
  imageSource,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.lessonContainer}>
        <Image source={imageSource} style={styles.img} resizeMode="cover" />
        <View style={styles.lessonNameContainer}>
          <Text style={styles.lessonName}>{lessonName}</Text>
          <Text style={styles.teacherName}>{teacherName}</Text>
          <Text style={styles.lessonCode}>{lessonCode}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "col",
    alignItems: "start",
  },
  lessonContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  img: {
    width: 90,
    height: 60,
    borderRadius: 10,
  },
  lessonNameContainer: {},
  lessonName: { fontSize: 17 },
  teacherName: { fontSize: 15 },
  lessonCode: { fontSize: 13 },
});

export default LessonComponent;
