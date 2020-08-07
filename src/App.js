import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "react-native-paper";
import Inputs from "./Input";
import List from "./Lists";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rakesh</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Inputs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
