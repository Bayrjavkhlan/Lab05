import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import profile from "../../assets/profileImg.jpg";

const Profile = () => {
  const studentData = [
    { label: "Нэр", value: "Баяржавхлан" },
    { label: "Нас", value: 20 },
    { label: "Курс", value: 3 },
    { label: "Голч", value: 4.0 },
    { label: "Мэргэшил", value: "Програм хангамжийн инженер" },
    { label: "Дугаар", value: "89702417" },
    { label: "Төрсөн өдөр", value: "2003-06-28" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.avatar} source={profile} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Сурагчийн мэдээлэл</Text>
        {studentData.map((item, index) => (
          <View key={index} style={styles.infoContainer}>
            <Text style={styles.label}>{item.label}:</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#822315",
    paddingVertical: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  bottomContainer: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    width: 100,
  },
  value: {
    fontSize: 18,
    flex: 1,
  },
});

export default Profile;
