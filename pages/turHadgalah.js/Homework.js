import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Homework = ({ route }) => {
  const [homeworkData, setHomeworkData] = useState(null);

  useEffect(() => {
    // Load data from data.json
    const loadData = async () => {
      try {
        const response = await fetch(
          "file:///home/zero/School/React-Native/LMS/data.json"
        );
        const data = await response.json();
        setHomeworkData(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  if (!homeworkData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.teacherContainer}>
          <View style={styles.circle}>
            <Ionicons name="person" size={25} color={"#fff"} />
          </View>
          <View style={styles.assignmentNameContainer}>
            <Text style={styles.teacherName}>{homeworkData.teacher}</Text>
            <Text style={styles.assignmentDate}>
              {homeworkData.assignmentDate}
            </Text>
          </View>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.point}>Оноо: {homeworkData.points}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.assignmentName}>{homeworkData.assignmentName}</Text>
        {homeworkData.instructions.map((instruction, index) => (
          <Text key={index}>{instruction}</Text>
        ))}
      </View>
      {/* Render attachments */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Styles here
});

export default Homework;
