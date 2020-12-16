import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Child #1</Text>
      <Text style={styles.text2}>Child #2</Text>
      <Text style={styles.text3}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 3,
    height: 200,
  },
  text1: {
    borderColor: "red",
    borderWidth: 3,
  },
  text2: {
    borderColor: "red",
    borderWidth: 3,
    alignSelf: "flex-start",
  },
  text3: {
    borderColor: "red",
    borderWidth: 3,
  },
});

export default BoxScreen;
