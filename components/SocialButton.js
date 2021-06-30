import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome";

const SocialButton = ({ buttonTitle, btnType, color, bgColor, ...rest }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: bgColor, borderColor: color },
      ]}
      {...rest}
    >
      <View style={styles.field}>
        <View style={styles.icon}>
          <Icon name={btnType} size={22} color={color} />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.buttonText, { color: color }]}>
            {buttonTitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    borderWidth: 1,
    width: "100%",
    height: windowHeight / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    alignItems: "flex-start",
    paddingLeft: 10,
    flex: 1,
  },

  textContainer: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    width: "100%",
  },

  buttonText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SocialButton;
