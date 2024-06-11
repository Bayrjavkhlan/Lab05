import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import LessonComponent from "./components/LessonComponent";

// import noImg from "../../assets/noImg.jpg";
// import mobileImg from "../../assets/mobileImg.webp";
// import cnImg from "../../assets/cnImg.jpg";
// import aiImg from "../../assets/aiImg.jpeg";
// import statisImg from "../../assets/statatisImg.jpg";

import { lessonsData } from "../data";

export default function Lesson({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  // const lessonsData = [
  //   {
  //     lessonName: "Хиймэл оюун ухаан",
  //     teacherName: "Н.Анхбаяр",
  //     lessonCode: "CS305",
  //     imageSource: aiImg,
  //   },
  //   {
  //     lessonName: "Мобайл програмчлал",
  //     teacherName: "Ц.Солонгоо",
  //     lessonCode: "SE305",
  //     imageSource: mobileImg,
  //   },
  //   {
  //     lessonName: "Магадлал ба статистик",
  //     teacherName: "Б.Санчир",
  //     lessonCode: "MAT204",
  //     imageSource: statisImg,
  //   },
  //   {
  //     lessonName: "Компьютерийн сүлжээ",
  //     teacherName: "Т.Гансүх",
  //     lessonCode: "CS306",
  //     imageSource: cnImg,
  //   },
  //   {
  //     lessonName: "Хичээл",
  //     teacherName: "Багш",
  //     lessonCode: "Код",
  //     imageSource: noImg,
  //   },
  // ];

  const goToLesson = (lessonName, teacherName) => {
    navigation.navigate("Lesson", { lessonName, teacherName });
  };

  return (
    <View
      style={{ flex: 1, justifyContent: "start", backgroundColor: "#f0f0f0" }}
    >
      <View
        style={{
          borderBottomColor: "#000",
          borderBottomWidth: 1,
          width: "100%",
        }}
      >
        {/* <SearchBar placeholder="Хайх..." platform="android" /> */}
      </View>
      <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
        <View>
          <Text style={styles.mainText}>Судалж буй хичээлүүд</Text>
        </View>
        <ScrollView>
          {lessonsData.map((lesson, index) => (
            <LessonComponent
              key={index}
              lessonName={lesson.lessonName}
              teacherName={lesson.teacherName}
              lessonCode={lesson.lessonCode}
              imageSource={lesson.imageSource}
              onPress={() => goToLesson(lesson.lessonName, lesson.teacherName)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
