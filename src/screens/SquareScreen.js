import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  const { type, payload } = action;
  const { red, green, blue } = state;
  // state === { red: number, green: number, blue: number };
  // action === { type: 'red' || 'green' || 'blue, payload: 15 || -15};
  switch (type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: red + payload };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: green + payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: blue + payload };
    default:
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;
  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text style={{ marginTop: 16 }}>
        `rgb({red}, {green}, {blue})`
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 16,
  },
});

export default SquareScreen;
