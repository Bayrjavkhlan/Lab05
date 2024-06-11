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
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Divider } from "react-native-paper";
import { FileIcon } from "react-file-icon";

const hexImage = "/LMS/assets/hexEditorImg.png";
const emptyState = require("../../assets/emptyState.jpg");
const profileImg = require("../../assets/profileImg.jpg");

export default function Homework() {
  const [input, setInput] = useState("");
  const [enteredTexts, setEnteredTexts] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const homeworkData = [
    {
      teacherName: "М. Отгонпүрэв",
      assignmentName: "Даалгавар 1",
      assignmentInstructions: [
        "Хавсралт дахь HxDSetup.zip програмыг суулгана",
        "Хавсралт дахь hh2.golden.exe файлыг HxD Hex Editor-оор шинжилж статик текстүүдийг олно",
        "hh2.golden.exe програм нь хэрэв хортой код байсан бол уг хортой кодыг таних ямар ямар signature үүсгэж болохыг тодорхойлон тайлбар бичиж Classroom-д оруулна",
      ],
      attachments: [
        {
          name: "hh2.golden.exe",
          downloadLink: "http://example.com/hh2.golden.exe",
        },
        {
          name: "HxDSetup.zip",
          downloadLink: "http://example.com/HxDSetup.zip",
        },
        {
          name: "Зураг.jpeg",
          downloadLink: "http://example.com/зураг.jpeg",
        },
        {
          name: "Зураг.jpeg",
          downloadLink: "http://example.com/зураг.jpeg",
        },
      ],
      points: 100,
    },
    {
      teacherName: "Another Teacher",
      assignmentName: "Another Assignment",
      assignmentInstructions: [
        "Instruction A",
        "Instruction B",
        "Instruction C",
      ],
      attachments: [],
      points: 75,
    },
  ];
  const handleSend = () => {
    if (input.trim() !== "") {
      setEnteredTexts([...enteredTexts, input]);
      setInput("");
    }
  };
  const handleDelete = (index) => {
    const newEnteredTexts = [...enteredTexts];
    newEnteredTexts.splice(index, 1);
    setEnteredTexts(newEnteredTexts);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 13 }}>
      <View style={styles.topContainer}>
        <View style={styles.teacherContainer}>
          <View style={styles.circle}>
            <Ionicons name="person" size={25} color={"#fff"} />
          </View>
          <View style={styles.assignmentNameContainer}>
            <Text style={styles.teacherName}>{`М. Отгонпүрэв`}</Text>
            <Text style={styles.assignmentDate}>5-р сар 1 12:00</Text>
          </View>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.point}>Оноо: 100</Text>
        </View>
      </View>
      <View>
        <Text style={styles.assignmentName}>Хортой код</Text>
        <Text>1. Хавсралт дахь HxDSetup.zip програмыг суулгана</Text>
        <Text>
          2. Хавсралт дахь hh2.golden.exe файлыг HxD Hex Editor-оор шинжилж
          статик текстүүдийг олно
        </Text>
        <Text>
          3. hh2.golden.exe програм нь хэрэв хортой код байсан бол уг хортой
          кодыг таних ямар ямар signature үүсгэж болохыг тодорхойлон тайлбар
          бичиж Classroom-д оруулна
        </Text>
      </View>
      <Divider style={styles.Divider} />
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.attachmentTitle}>Хавсралт</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: 10,
            }}
          >
            <View style={styles.attachmentAll}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    "http://samples.leanpub.com/thereactnativebook-sample.pdf"
                  )
                }
                style={styles.attachment}
              >
                <Text style={styles.pdfText}>hh2.golden.exe</Text>
                <Ionicons name="cloud-download" size={25} color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.attachment}>
                <Text style={styles.pdfText}>HxDSetup.zip</Text>
                <Ionicons name="cloud-download" size={25} color={"#fff"} />
              </TouchableOpacity>
            </View>
            {/* <View style={styles.attachmentAll}>
              <View style={styles.attachmentImg}>
                <Image
                  source={profileImg}
                  style={styles.img1}
                  resizeMode="contain"
                />
                <Text style={styles.pdfText}>Зураг.jpeg</Text>
                <Ionicons name="cloud-download" size={25} color={"#fff"} />
              </View>
              <View style={styles.attachmentImg}>
                <Image
                  source={profileImg}
                  style={styles.img1}
                  resizeMode="contain"
                />
                <Text style={styles.pdfText}>Зураг.jpeg</Text>
                <Ionicons name="cloud-download" size={25} color={"#fff"} />
              </View>
            </View> */}
          </View>
        </View>
      </ScrollView>
      <Divider style={styles.Divider} />

      <ScrollView style={styles.enteredFilesScroll}>
        <View style={{ minHeight: 220 }}>
          <View style={styles.enteredFile}>
            <Text style={styles.attachmentTitle}>Миний оруулсан</Text>
            {enteredTexts.length > 0 ? (
              enteredTexts.map((text, index) => (
                <View style={styles.message} key={index}>
                  <View style={styles.profileContainer}>
                    <Image
                      source={profileImg}
                      style={styles.img}
                      resizeMode="contain"
                    />
                    <Text style={styles.enteredTexts}>{text}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleDelete(index)}>
                    <Ionicons name="close" size={25} color={"#822315"} />
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 200,
                }}
              >
                <Image
                  source={emptyState}
                  style={styles.img2}
                  resizeMode="contain"
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>

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
            value={input}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={handleSend}>
            <Ionicons name="send" size={25} color={"#822315"} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: { flexDirection: "row" },
  enteredTexts: { fontSize: 16, paddingLeft: 10 },

  message: {
    borderBlockColor: "rgba(130, 35, 33, 255)",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    flexDirection: "col",
    alignItems: "start",
  },
  img: { height: 40, width: 40, borderRadius: 100, zIndex: 2 },
  imgDisplay: {
    height: 100,
    flexDirection: "row",
    gap: 10,
  },
  img1: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  img2: { height: 100, width: 100, zIndex: 2 },

  topContainer: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10,
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
    justifyContent: "center",
  },

  point: { fontSize: 18 },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(130,35,33,255)",
    justifyContent: "center",
    alignItems: "center",
  },
  assignmentName: { fontSize: 18, fontWeight: "500", marginBottom: 5 },
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
  enteredFilesScroll: { height: 200, marginBottom: -100 },
  enteredFile: {
    height: 200,
  },
  attachmentTitle: { marginBottom: 10, fontSize: 16, fontWeight: "500" },
  attachmentAll: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  attachment: {
    flex: 1,
    backgroundColor: "rgba(130,35,33,255)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  attachmentImg: {
    flex: 1,
    backgroundColor: "rgba(130,35,33,255)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingRight: 10,
  },
  pdfText: { color: "white" },
  Divider: { marginVertical: 10, backgroundColor: "#000", borderWidth: 0.19 },
  redDivider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "rgba(130,35,33,255)",
  },

  myWorkText: { fontSize: 16 },
});
