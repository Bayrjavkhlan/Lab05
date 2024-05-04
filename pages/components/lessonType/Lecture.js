import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Linking,
  Image,
} from "react-native";
import ImageView from "react-native-image-viewing";

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Divider } from "react-native-paper";
import { FileIcon } from "react-file-icon";

const appLayerImg1 = require("../../../assets/applicationLayer.jpg");
const appLayerImg = require("../../../assets/applicationLayer.jpg");
const images = [
  {
    uri: appLayerImg1,
  },
];
export default function Lecture() {
  const [input, setInput] = useState("");
  const [visible, setIsVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
      <View style={styles.topContainer}>
        <View style={styles.teacherContainer}>
          <View style={styles.circle}>
            <Ionicons name="person" size={25} color={"#fff"} />
          </View>
          <View style={styles.assignmentNameContainer}>
            <Text style={styles.teacherName}>{`М. Отгонпүрэв`}</Text>
            <Text style={styles.assignmentDate}>{`4-р сар 18 17:39`}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Сүлжээний түвшингүүдийн үүрэг</Text>
      </View>
      <Divider style={styles.Divider} />
      <View style={styles.attachmentContainer}>
        <Text style={styles.attachmentTitle}>Хавсралт</Text>
        <View style={styles.attachmentAll}>
          {/* <Image source={appLayerImg} style={styles.img} resizeMode="cover" /> */}
          <ImageView
            images={appLayerImg1}
            imageIndex={0}
            visible={visible}
            onRequestClose={() => setIsVisible(false)}
          />
        </View>
        <Divider style={styles.Divider} />
        <Text style={styles.attachmentTitle}>Миний оруулсан</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          style={styles.inputContainer}
        >
          <TouchableOpacity style={styles.upload}>
            <Ionicons name="cloud-upload" size={25} color={"#fff"} />
          </TouchableOpacity>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="Гарчигаа оруулна уу?"
              onChangeText={(searchString) => {
                setInput(searchString);
              }}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity onPress={() => alert(`${input}`)}>
              <Ionicons name="send" size={25} color={"#822315"} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "col",
    alignItems: "start",
  },
  img: { height: 100, width: 100 },

  topContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  teacherContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
  },
  assignmentNameContainer: {},
  teacherName: { fontSize: 18 },
  assignmentDate: { fontSize: 13 },
  pointContainer: {
    paddingRight: 10,
  },
  point: { fontSize: 16, marginTop: 6 },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(130,35,33,255)",
    justifyContent: "center",
    alignItems: "center",
  },
  upload: {
    backgroundColor: "rgba(130,35,33,255)",
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "rgba(130,35,33,255)",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "#424242",
  },
  attachmentContainer: { flex: 1 },
  attachmentTitle: { marginBottom: 10, fontSize: 16 },
  attachmentAll: { flexDirection: "row", gap: 10, flexWrap: "wrap" },
  attachment: {
    flex: 1,
    backgroundColor: "rgba(130,35,33,255)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  pdfText: { color: "white" },
  Divider: { marginVertical: 10 },
  redDivider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "rgba(130,35,33,255)",
  },

  myWorkText: { fontSize: 16 },
});
