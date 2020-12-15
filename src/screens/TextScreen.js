import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      {password.length <= 4 ? (
        <Text style={styles.error}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
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
  error: { color: "red", fontWeight: "bold" },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    minWidth: "80%",
    marginVertical: 16,
  },
});

export default TextScreen;
