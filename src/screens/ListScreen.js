import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const friends = [
    {
      name: "Natasha",
      age: 34,
    },
    {
      name: "Steve",
      age: 100,
    },
    {
      name: "Tony",
      age: 48,
    },
    {
      name: "Thor",
      age: 99999,
    },
    {
      name: "Bruce",
      age: 49,
    },
    {
      name: "Clint",
      age: 47,
    },
    {
      name: "Carol",
      age: 60,
    },
    {
      name: "Peter",
      age: 18,
    },
    {
      name: "Stephen",
      age: 42,
    },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
