// import React from "react";
// import { View, StyleSheet } from "react-native";
// import Pdf from "react-native-pdf";

// export default function PDFExample() {
//   return (
//     <View style={styles.container}>
//       <Pdf
//         source={{
//           uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
//         }}
//         onLoadComplete={(numberOfPages, filePath) => {
//           console.log(`Number of pages: ${numberOfPages}`);
//         }}
//         onPageChanged={(page, numberOfPages) => {
//           console.log(`Current page: ${page}`);
//         }}
//         onError={(error) => {
//           console.log(error);
//         }}
//         style={styles.pdf}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginTop: 25,
//   },
//   pdf: {
//     flex: 1,
//     width: "100%",
//   },
// });
