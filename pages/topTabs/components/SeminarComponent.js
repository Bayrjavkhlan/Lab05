import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SeminarComponent = ({
  seminarName,
  enteredDate,
  checkedSeminar,
  onPress,
}) => {
  if (checkedSeminar) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.lessonContainer}>
          <View style={styles.circle}>
            <Ionicons name="book" size={25} color={"#fff"} />
          </View>
          <View style={styles.assignmentNameContainer}>
            <Text style={styles.assignmentName}>{seminarName}</Text>
            <Text style={styles.assignmentDate}>
              Орсон хугацаа: {enteredDate}
            </Text>
            <Text style={styles.assignmentType}>Семинар</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    null;
  }
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
    alignItems: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(130,35,33,255)",
    justifyContent: "center",
    alignItems: "center",
  },
  assignmentNameContainer: {},
  assignmentName: { fontSize: 17 },
  assignmentDate: { fontSize: 12 },
  assignmentType: { fontSize: 13 },
});

export default SeminarComponent;
