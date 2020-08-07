import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-web";
const WebViewExample = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri:
            "https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint"
        }}
      />
    </View>
  );
};
export default WebViewExample;

const styles = StyleSheet.create({
  container: {
    height: 350
  }
});
