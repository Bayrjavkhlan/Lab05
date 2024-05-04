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
import noImg from "../../../assets/noImg.jpg";
import mobileImg from "../../../assets/mobileImg.webp";
import cnImg from "../../../assets/cnImg.jpg";
import aiImg from "../../../assets/aiImg.jpeg";
import statisImg from "../../../assets/statatisImg.jpg";

import news1Img from "../../../assets/news1.jpg";
import news2Img from "../../../assets/newsImg2.jpg";

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "start",
          alignItems: "center",
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
                <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
                  <View>
                    <Image
                      source={mobileImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Мобайл програмчлал</Text>
                    <Text style={styles.teacherName}>Ц.Солонгоо</Text>
                  </View>
                  <View>
                    <Image
                      source={cnImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Компьютерийн сүлжээ</Text>
                    <Text style={styles.teacherName}>T.Гансүх</Text>
                  </View>
                  <View>
                    <Image
                      source={statisImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Магадлал ба статистик</Text>
                    <Text style={styles.teacherName}>Б.Санчир</Text>
                  </View>
                  <View>
                    <Image
                      source={aiImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Хиймэл оюун ухаан</Text>
                    <Text style={styles.teacherName}>Н.Анхбаяр</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.container}>
              <View>
                <Text style={styles.customTextStyle}>Мэдээлэл</Text>
              </View>
              <ScrollView horizontal>
                <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
                  <View>
                    <Text style={styles.newsTitle}>
                      Улаан загалмай нийгэмлэгийн танилцуулга
                    </Text>

                    <Image
                      source={news1Img}
                      style={styles.newsImg}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.newsTitle}>
                      Рийлс богино хэмжээний видео контент бүтээх уралдаан
                    </Text>

                    <Image
                      source={news2Img}
                      style={styles.newsImg}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.newsTitle}>Гарчиг</Text>

                    <Image
                      source={noImg}
                      style={styles.newsImg}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.container}>
              <View>
                <Text style={styles.customTextStyle}>Арга хэмжээ</Text>
              </View>
              <ScrollView horizontal>
                <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.container}>
              <View>
                <Text style={styles.customTextStyle}>Тэтгэлэг</Text>
              </View>
              <ScrollView horizontal>
                <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
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
});
