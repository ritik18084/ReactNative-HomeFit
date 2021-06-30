import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

const LoadingScreen = ({ navigation }) => {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user !== null) {
        navigation.navigate("PostLogin");
      } else {
        navigation.navigate("Login");
      }
    });
  }, []);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
