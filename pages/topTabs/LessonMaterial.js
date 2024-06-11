import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Checkbox } from "react-native-paper";
import HomeworkComponent from "./components/HomeworkComponent";
import LectureComponent from "./components/LectureComponent";
import SeminarComponent from "./components/SeminarComponent";

export default function LessonMaterial({ navigation }) {
  const assignmentType = "Даалгавар";
  const [checkedLecture, setCheckedLecture] = React.useState(true);
  const [checkedSeminar, setCheckedSeminar] = React.useState(true);
  const [checkedHomework, setCheckedHomework] = React.useState(true);

  const formatEnteredDate = (date) => {
    const months = [
      "1-р сар",
      "2-р сар",
      "3-р сар",
      "4-р сар",
      "5-р сар",
      "6-р сар",
      "7-р сар",
      "8-р сар",
      "9-р сар",
      "10-р сар",
      "11-р сар",
      "12-р сар",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${month} ${day} ${hour}:${minute < 10 ? "0" + minute : minute}`;
  };

  const goToLecture = (lectureName) => {
    navigation.navigate("Lecture", { lectureName });
  };

  const goToSeminar = (seminarName) => {
    navigation.navigate("Seminar", { seminarName });
  };

  const goToHomework = (homeWorkName) => {
    navigation.navigate("Homework", { homeWorkName });
  };

  // const homework1 = {
  //   teacher: "М. Отгонпүрэв",
  //   assignmentDate: "5-р сар 1 12:00",
  //   points: 100,
  //   assignmentName: "Хортой код",
  //   instructions: [
  //     "Хавсралт дахь HxDSetup.zip програмыг суулгана",
  //     "Хавсралт дахь hh2.golden.exe файлыг HxD Hex Editor-оор шинжилж статик текстүүдийг олно",
  //     "hh2.golden.exe програм нь хэрэв хортой код байсан бол уг хортой кодыг таних ямар ямар signature үүсгэж болохыг тодорхойлон тайлбар бичиж Classroom-д оруулна",
  //   ],
  //   attachments: [
  //     { name: "hh2.golden.exe", url: "http://example.com/hh2.golden.exe" },
  //     { name: "HxDSetup.zip", url: "http://example.com/HxDSetup.zip" },
  //     { name: "Зураг.jpeg", url: "http://example.com/Зураг.jpeg" },
  //     { name: "Зураг.jpeg", url: "http://example.com/Зураг.jpeg" },
  //   ],
  // };

  const lectures = [
    {
      lectureName: "Лекц1",
      enteredDate: new Date(2024, 3, 18, 17, 39),
    },
    {
      lectureName: "Лекц2",
      enteredDate: new Date(2024, 3, 20, 9, 0),
    },
    {
      lectureName: "Лекц3",
      enteredDate: new Date(2024, 3, 22, 13, 45),
    },
  ];

  const seminars = [
    {
      seminarName: "Семинар1",
      enteredDate: new Date(2024, 3, 19, 10, 30),
    },
    {
      seminarName: "Семинар2",
      enteredDate: new Date(2024, 3, 21, 14, 15),
    },
    {
      seminarName: "Семинар3",
      enteredDate: new Date(2024, 3, 24, 11, 0),
    },
  ];

  const homeworks = [
    {
      homeWorkName: "Даалгавар1",
      enteredDate: new Date(2024, 3, 17, 8, 0),
      endDate: new Date(2024, 3, 17, 8, 0),
    },
    {
      homeWorkName: "Даалгавар2",
      enteredDate: new Date(2024, 3, 23, 16, 30),
      endDate: new Date(2024, 3, 17, 8, 0),
    },
    {
      homeWorkName: "Даалгавар3",
      enteredDate: new Date(2024, 3, 26, 9, 45),
      endDate: new Date(2024, 3, 17, 8, 0),
    },
  ];

  const allItems = [...homeworks, ...lectures, ...seminars].sort(
    (a, b) => a.enteredDate - b.enteredDate
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setCheckedLecture(!checkedLecture)}
          style={styles.checkbox}
        >
          <Text>Лекц</Text>
          <Checkbox
            status={checkedLecture === true ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCheckedSeminar(!checkedSeminar)}
          style={styles.checkbox}
        >
          <Text>Семинар</Text>
          <Checkbox
            status={checkedSeminar === true ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCheckedHomework(!checkedHomework)}
          style={styles.checkbox}
        >
          <Text>Даалгавар</Text>
          <Checkbox
            status={checkedHomework === true ? "checked" : "unchecked"}
            color="#822315"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {allItems.map((item, index) => {
          if (item.homeWorkName) {
            return (
              <HomeworkComponent
                key={index}
                homeWorkName={item.homeWorkName}
                assignmentType={assignmentType}
                enteredDate={formatEnteredDate(item.enteredDate)}
                endDate={formatEnteredDate(item.endDate)}
                checkedHomework={checkedHomework}
                onPress={() => goToHomework(item.homeWorkName)}
              />
            );
          } else if (item.lectureName) {
            return (
              <LectureComponent
                key={index}
                lectureName={item.lectureName}
                enteredDate={formatEnteredDate(item.enteredDate)}
                checkedLecture={checkedLecture}
                onPress={() => goToLecture(item.lectureName)}
              />
            );
          } else if (item.seminarName) {
            return (
              <SeminarComponent
                key={index}
                seminarName={item.seminarName}
                enteredDate={formatEnteredDate(item.enteredDate)}
                checkedSeminar={checkedSeminar}
                onPress={() => goToSeminar(item.seminarName)}
              />
            );
          }
        })}
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
});
