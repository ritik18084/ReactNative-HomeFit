import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2e64e5",
    width: "100%",
    height: windowHeight / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default FormButton;
