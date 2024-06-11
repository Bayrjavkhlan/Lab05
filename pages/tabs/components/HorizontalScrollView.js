import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const HorizontalScrollView = ({
  title,
  imgArray,
  descArray,
  type,
  lessonNames,
  teacherNames,
}) => {
  if (type === "1") {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.customTextStyle}>{title}</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {imgArray.map((imgPath, index) => (
              <View key={index}>
                <Text style={styles.lessonName}>{descArray[index]}</Text>
                <Image source={imgPath} style={styles.img} resizeMode="cover" />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  } else if (type === "2") {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.customTextStyle}>{title}</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {imgArray.map((imgPath, index) => (
              <View key={index}>
                <Text style={styles.newsTitle}>{descArray[index]}</Text>
                <Image
                  source={imgPath}
                  style={styles.newsImg}
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  } else if (type === "3") {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.customTextStyle}>{title}</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {imgArray.map((imgPath, index) => (
              <View key={index}>
                <Image source={imgPath} style={styles.img} resizeMode="cover" />
                <Text style={styles.lessonName}>{lessonNames[index]}</Text>
                <Text style={styles.teacherName}>{teacherNames[index]}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
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

export default HorizontalScrollView;
