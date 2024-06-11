import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-paper";

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Мягмар");
  const handleWeekday = (day) => {
    setSelectedDay(day);
  };
  const scheduleData = {
    Даваа: [],
    Мягмар: [
      {
        time: "08.20",
        title: "Хиймэл оюун ухаан",
        type: "Лекц",
        teacher: "Анхбаяр",
      },
      {
        time: "10.00",
        title: "Хиймэл оюун ухаан",
        type: "Cеминар",
        teacher: "Анхбаяр",
      },
      {
        time: "11:30",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
    ],
    Лхагва: [
      {
        time: "08.20",
        title: "Хиймэл оюун ухаан",
        type: "Лекц",
        teacher: "Анхбаяр",
      },
      {
        time: "10.00",
        title: "Хиймэл оюун ухаан",
        type: "Cеминар",
        teacher: "Анхбаяр",
      },
      {
        time: "11:30",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
      {
        time: "14.00",
        title: "Хиймэл оюун ухаан",
        type: "Cеминар",
        teacher: "Анхбаяр",
      },
      {
        time: "15:40",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
    ],
    Пүрэв: [
      {
        time: "08.20",
        title: "Хиймэл оюун ухаан",
        type: "Лекц",
        teacher: "Анхбаяр",
      },
      {
        time: "10.00",
        title: "Хиймэл оюун ухаан",
        type: "Cеминар",
        teacher: "Анхбаяр",
      },
      {
        time: "11:30",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
    ],
    Баасан: [
      {
        time: "",
        title: "",
        type: "",
        teacher: "",
      },
      {
        time: "11:30",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
      {
        time: "11:30",
        title: "Мэдээллийн аюулгүй байдал",
        type: "Cеминар",
        teacher: "Отгонпүрэв",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.daysRow}>
        {["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан"].map((day) => (
          <TouchableOpacity
            key={day}
            style={day === selectedDay ? styles.activeDay : styles.day}
            onPress={() => handleWeekday(day)}
          >
            <Text
              style={
                day === selectedDay ? styles.activeDayText : styles.dayText
              }
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.dayContainer}>
          <Text style={styles.sectionTitle}>{selectedDay}</Text>
          {scheduleData[selectedDay].map((event, index) => (
            <View key={index} style={styles.event}>
              <Text style={styles.parTitle}>{(index += 1)}-р Пар</Text>
              <View style={styles.lessonContainer}>
                <Text style={styles.timeText}>{event.time}</Text>
                <Text style={styles.lessonName}>{event.title}</Text>
                <Text style={styles.lessonType}>{event.type}</Text>
                <Divider />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 15,
    backgroundColor: "#F5F5F5",
  },
  day: {
    alignItems: "center",
  },
  activeDay: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#822315",
  },
  dayText: {
    fontSize: 14,
    color: "#757575",
  },
  activeDayText: {
    fontSize: 14,
    color: "#822315",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  dayContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  event: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  parTitle: { fontSize: 16, fontWeight: "600", marginRight: 10 },
  lessonContainer: {
    flexDirection: "column",
    gap: 3,
  },
  lessonName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonType: {
    fontSize: 14,
    color: "#757575",
  },
});

export default Schedule;
