import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  const { type, payload } = action;
  const { counter } = state;
  switch (type) {
    case "increase":
      return { ...state, counter: counter + payload };
    case "decrease":
      return { ...state, counter: counter - payload };
    default:
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: 1 })}
      />
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default CounterScreen;
