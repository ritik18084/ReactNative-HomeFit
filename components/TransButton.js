import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

const TransButton = ({ buttonText, color, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={[styles.text, { color: color }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: "center",
  },

  text: {
    fontWeight: "bold",
  },
});

export default TransButton;
