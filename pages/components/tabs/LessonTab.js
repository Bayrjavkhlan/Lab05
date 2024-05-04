import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import noImg from "../../../assets/noImg.jpg";
import mobileImg from "../../../assets/mobileImg.webp";
import cnImg from "../../../assets/cnImg.jpg";
import aiImg from "../../../assets/aiImg.jpeg";
import statisImg from "../../../assets/statatisImg.jpg";
export default function Lesson({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  const lessonName = "Хиймэл оюун ухаан";
  const teacherName = "Н.Анхбаяр";
  const lessonName1 = "Мобайл";
  const teacherName1 = "Ц.Солонгоо";
  const lessonNoName = "Хичээл";
  const lessonNoTeacher = "Багш";

  const goToLesson = (lessonName, teacherName) => {
    navigation.navigate("Lesson", { lessonName, teacherName });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "start",
        }}
      >
        <View
          style={{
            borderBottomColor: "#000",
            borderBottomWidth: 1,
            width: "100%",
          }}
        >
          {/* <SearchBar
            placeholder="Хайх..."
            // onChangeText={updateSearch}
            platform="android"
            // value={search}
          /> */}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 10,
          }}
        >
          <View>
            <Text style={styles.mainText}>Судалж буй хичээлүүд</Text>
          </View>
          <ScrollView>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonName, teacherName)}
            >
              <View style={styles.lessonContainer}>
                <Image source={aiImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonName}`}</Text>
                  <Text style={styles.teacherName}>{`${teacherName}`}</Text>
                  <Text style={styles.lessonCode}>CS305</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonName1, teacherName1)}
            >
              <View style={styles.lessonContainer}>
                <Image
                  source={mobileImg}
                  style={styles.img}
                  resizeMode="cover"
                />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonName1}`}</Text>
                  <Text style={styles.teacherName}>{`${teacherName1}`}</Text>
                  <Text style={styles.lessonCode}>SE305</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image
                  source={statisImg}
                  style={styles.img}
                  resizeMode="cover"
                />
                <View style={styles.lessonNameContainer}>
                  <Text
                    style={styles.lessonName}
                  >{`Магадлал ба статистик`}</Text>
                  <Text style={styles.teacherName}>{`Б.Санчир`}</Text>
                  <Text style={styles.lessonCode}>MAT204</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image source={cnImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`Компьютерийн сүлжээ`}</Text>
                  <Text style={styles.teacherName}>{`Т.Гансүх`}</Text>
                  <Text style={styles.lessonCode}>CS306</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image source={noImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonNoName}`}</Text>
                  <Text style={styles.teacherName}>{`${lessonNoTeacher}`}</Text>
                  <Text style={styles.lessonCode}>Код</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image source={noImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonNoName}`}</Text>
                  <Text style={styles.teacherName}>{`${lessonNoTeacher}`}</Text>
                  <Text style={styles.lessonCode}>Код</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image source={noImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonNoName}`}</Text>
                  <Text style={styles.teacherName}>{`${lessonNoTeacher}`}</Text>
                  <Text style={styles.lessonCode}>Код</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.container}
              onPress={() => goToLesson(lessonNoName, lessonNoTeacher)}
            >
              <View style={styles.lessonContainer}>
                <Image source={noImg} style={styles.img} resizeMode="cover" />
                <View style={styles.lessonNameContainer}>
                  <Text style={styles.lessonName}>{`${lessonNoName}`}</Text>
                  <Text style={styles.teacherName}>{`${lessonNoTeacher}`}</Text>
                  <Text style={styles.lessonCode}>Код</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  img: {
    width: 90,
    height: 60,
    borderRadius: 10,
  },
  lessonName: { fontSize: 17 },
  teacherName: { fontSize: 15 },
  lessonCode: { fontSize: 13 },
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
  lessonNameContainer: {},
});
