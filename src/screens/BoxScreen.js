import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text1} />
      <View style={styles.text2} />
      <View style={styles.text3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 3,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    borderColor: "red",
    borderWidth: 3,
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  text2: {
    borderColor: "green",
    borderWidth: 3,
    backgroundColor: "green",
    height: 100,
    width: 100,
    alignSelf: "flex-end",
  },
  text3: {
    borderColor: "purple",
    borderWidth: 3,
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
