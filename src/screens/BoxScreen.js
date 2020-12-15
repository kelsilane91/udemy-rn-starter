import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Box Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "blue",
  },
  text: {
    borderWidth: 10,
    borderColor: "red",
    margin: 20,
    padding: 10,
    backgroundColor: "yellow",
  },
});

export default BoxScreen;
