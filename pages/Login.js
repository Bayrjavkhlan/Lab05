import React, { useState, useEffect } from "react";
import {
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Switch,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import logo from "../assets/nmitLogo.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function LoginForm({ navigation }) {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LoginValidate = () => {
    // if (!username) {
    //   Alert.alert("Нэвтэх нэрээ оруулна уу?");
    //   return;
    // }
    // if (!password) {
    //   Alert.alert("Нууц үгээ оруулна уу?");
    //   return;
    // }
    // Alert.alert("Амжилттай нэвтэрлээ");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Нэвтрэх</Text>
      <View style={styles.inputView}>
        <Text style={styles.text}>Нэвтрэх нэр</Text>

        <TextInput
          style={styles.input}
          placeholder="test123@gmail.com"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.text}>Нууц үг</Text>
        <TextInput
          style={styles.input}
          placeholder="test123"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ true: "rgba(130,35,33,255)", false: "gray" }}
          />
          <Text style={styles.rememberText}>Намайг сана</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Alert.alert("Нууц үг мартсан дарагдсан")}
          >
            <Text style={styles.forgetText}>Нууц үг мартсан?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={LoginValidate}>
          <Text style={styles.buttonText}>Нэвтрэх</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const red = "rgba(130,35,33,255)";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "white",
  },
  image: {
    height: 260,
    width: 270,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingBottom: 40,
    color: red,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: red,
    borderWidth: 1,
    borderRadius: 7,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: red,
  },
  button: {
    backgroundColor: red,
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    borderColor: "white",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
});
