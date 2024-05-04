import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

export default function LessonMaterial({ navigation }) {
  // const assignmentName = "Даалгавар1";
  const assignmentDate = "Да 17:12           Ба 9:00";
  const assignmentType = "Даалгавар";
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: "1", value: "Лекц" },
    { key: "2", value: "Семинар" },
    { key: "3", value: "Лаборатори" },
    { key: "4", value: "Даалгавар" },
  ];
  const [checkedLecture, setCheckedLecture] = React.useState(true);
  const [checkedSeminar, setCheckedSeminar] = React.useState(true);
  const [checkedHomework, setCheckedHomework] = React.useState(true);

  const goToLecture = (lectureName) => {
    navigation.navigate("Lecture", { lectureName });
  };
  const goToSeminar = (seminarName) => {
    navigation.navigate("Seminar", { seminarName });
  };

  const goToHomework = (homeWorkName) => {
    navigation.navigate("Homework", { homeWorkName });
  };

  const lectureName = "Лекц1";
  const seminarName = "Семинар1";
  const homeWorkName = "Даалгавар нэр";
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View style={styles.checkboxContainer}>
        {/* <MultipleSelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              placeholder="Төрлөө сонгоно уу?"
              // onSelect={() => alert(selected)}
              label="Төрөл"
              search={false}
              dropdownShown={false}
            /> */}
        <TouchableOpacity
          onPress={() => {
            setCheckedLecture(!checkedLecture);
          }}
          style={styles.checkbox}
        >
          <Text>Лекц</Text>
          <Checkbox
            status={checkedLecture ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCheckedSeminar(!checkedSeminar);
          }}
          style={styles.checkbox}
        >
          <Text>Семинар</Text>
          <Checkbox
            status={checkedSeminar ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCheckedHomework(!checkedHomework);
          }}
          style={styles.checkbox}
        >
          <Text>Даалгавар</Text>
          <Checkbox
            status={checkedHomework ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {checkedHomework ? (
          <TouchableOpacity
            style={styles.container}
            onPress={() => goToHomework(homeWorkName)}
          >
            <View style={styles.lessonContainer}>
              <View style={styles.circle}>
                <Ionicons name="pencil" size={25} color={"#fff"} />
              </View>
              <View style={styles.assignmentNameContainer}>
                <Text style={styles.assignmentName}>{`${homeWorkName}`}</Text>
                <Text
                  style={styles.assignmentDate}
                >{`Орсон хугацаа: 4-р сар 18 17:39`}</Text>
                <Text
                  style={styles.assignmentDate}
                >{`Дуусах хугацаа: 4-р сар 27 09:00`}</Text>
                <Text style={styles.assignmentType}>{`${assignmentType}`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
        {checkedLecture ? (
          <TouchableOpacity
            style={styles.container}
            onPress={() => goToLecture(lectureName)}
          >
            <View style={styles.lessonContainer}>
              <View style={styles.circle}>
                <Ionicons name="book" size={25} color={"#fff"} />
              </View>
              <View style={styles.assignmentNameContainer}>
                <Text style={styles.assignmentName}>{`${lectureName}`}</Text>
                <Text
                  style={styles.assignmentDate}
                >{`Орсон хугацаа: 27 17:39`}</Text>
                <Text style={styles.assignmentType}>{`Лекц`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
        {checkedSeminar ? (
          <TouchableOpacity
            style={styles.container}
            onPress={() => goToSeminar(seminarName)}
          >
            <View style={styles.lessonContainer}>
              <View style={styles.circle}>
                <Ionicons name="book" size={25} color={"#fff"} />
              </View>
              <View style={styles.assignmentNameContainer}>
                <Text style={styles.assignmentName}>{`${seminarName}`}</Text>
                <Text
                  style={styles.assignmentDate}
                >{`Орсон хугацаа: 27 17:39`}</Text>
                <Text style={styles.assignmentType}>{`Семинар`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  checkboxContainer: { height: 30, flexDirection: "row" },
  checkbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
  assignmentName: { fontSize: 17 },
  assignmentDate: { fontSize: 12 },
  assignmentType: { fontSize: 13 },
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
  assignmentNameContainer: {},
});
