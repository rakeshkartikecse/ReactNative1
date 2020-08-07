import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Lists from "./Lists";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rakesh</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Lists />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
