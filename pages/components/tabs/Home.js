import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
// import noImg from "../assets/noImg.jpg";
import noImg from "../../../assets/noImg.jpg"

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <SearchBar
          placeholder="Хайх..."
          onChangeText={updateSearch}
          platform="android"
          value={search}
        />
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
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Хичээл нэр</Text>
                    <Text style={styles.teacherName}>Багш нэр</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Хичээл нэр</Text>
                    <Text style={styles.teacherName}>Багш нэр</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Хичээл нэр</Text>
                    <Text style={styles.teacherName}>Багш нэр</Text>
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
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
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
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.container}>
              <View>
                <Text style={styles.customTextStyle}>Арга хэмжээ</Text>
              </View>
              <ScrollView horizontal style={{}}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    gap: 20,
                  }}
                >
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
                  </View>
                  <View>
                    <Image
                      source={noImg}
                      style={styles.img}
                      resizeMode="cover"
                    />
                    <Text style={styles.lessonName}>Гарчиг</Text>
                    <Text style={styles.teacherName}>Товч мэдээлэл</Text>
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
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
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
