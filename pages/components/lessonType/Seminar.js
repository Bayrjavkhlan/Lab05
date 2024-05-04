import { View, Text } from "react-native";
import { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";

// import { pick } from "@react-native-documents/picker";

export default function Seminar() {
  // const [selectedLanguage, setSelectedLanguage] = useState();
  // const pickerRef = useRef();

  // function open() {
  //   pickerRef.current.focus();
  // }

  // function close() {
  //   pickerRef.current.blur();
  // }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Button
        title="single file import"
        onPress={async () => {
          // const [pickResult] = await pick();
          // const [pickResult] = await pick({mode:'import'}) // equivalent
          // do something with the picked file
          // see error handling
        }}
      /> */}
      {/* <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
    </View>
  );
}
