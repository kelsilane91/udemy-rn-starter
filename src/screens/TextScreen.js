import React, { useReducer, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 16,
    flexDirection: "column",
    flex: 1,
  },
  textInput: { borderWidth: 1, borderColor: "black", minWidth: "80%" },
});

export default TextScreen;
