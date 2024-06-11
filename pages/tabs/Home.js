import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Platform,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import noImg from "../../assets/noImg.jpg";
import mobileImg from "../../assets/mobileImg.webp";
import cnImg from "../../assets/cnImg.jpg";
import aiImg from "../../assets/aiImg.jpeg";
import statisImg from "../../assets/statatisImg.jpg";

import news1Img from "../../assets/news1.jpg";
import news2Img from "../../assets/newsImg2.jpg";
import HorizontalScrollView from "./components/HorizontalScrollView";

import { lessonsData } from "../data";
import TestComp from "./components/lessonComp";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
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
            onChangeText={updateSearch}
            platform="android"
            value={search}
          /> */}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "start",
          padding: 10,
        }}
      >
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.customTextStyle}>Судалж буй хичээлүүд</Text>
            </View>
            <ScrollView horizontal>
              {lessonsData.map((lesson, index) => (
                <View style={styles.test}>
                  <TestComp
                    key={index}
                    lessonName={lesson.lessonName}
                    teacherName={lesson.teacherName}
                    imageSource={lesson.imageSource}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          {/* <HorizontalScrollView
            title="Судалж буй хичээлүүд"
            imgArray={[mobileImg, cnImg, statisImg, aiImg]}
            lessonNames={[
              "Мобайл програмчлал",
              "Компьютерийн сүлжээ",
              "Магадлал ба статистик",
              "Хиймэл оюун ухаан",
            ]}
            teacherNames={["Ц.Солонгоо", "T.Гансүх", "Б.Санчир", "Н.Анхбаяр"]}
            type={"3"}
          /> */}
          <HorizontalScrollView
            title="Мэдээлэл"
            imgArray={[news1Img, news2Img, noImg]}
            descArray={[
              "Улаан загалмай нийгэмлэгийн танилцуулга",
              "Рийлс богино хэмжээний видео контент бүтээх уралдаан",
              "Гарчиг",
            ]}
            type={"2"}
          />
          <HorizontalScrollView
            title="Арга хэмжээ"
            imgArray={[noImg, noImg, noImg]}
            descArray={["Гарчиг", "Гарчиг", "Гарчиг"]}
            type={"1"}
          />
          <HorizontalScrollView
            title="Тэтгэлэг"
            imgArray={[noImg, noImg, noImg]}
            descArray={["Гарчиг", "Гарчиг", "Гарчиг"]}
            type={"1"}
          />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  customTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 180,
    height: 120,
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
