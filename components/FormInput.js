import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight } from "../utils/Dimensions";

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.field}>
        <View style={styles.icon}>
          <AntDesign name={iconType} size={30} color="#7A7A7A" />
        </View>
        <TextInput
          style={styles.input}
          value={labelValue}
          placeholder={placeholderText}
          placeholderTextColor="grey"
          numberOfLines={1}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderColor: "#B5B5B5",
    borderWidth: 1,
  },

  field: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginHorizontal: 10,
    height: windowHeight / 15,
  },

  icon: {
    borderRightWidth: 2,
    paddingHorizontal: 15,
    height: windowHeight / 15,
    borderRightColor: "#B5B5B5",
    backgroundColor: "white",
    justifyContent: "center",
    color: "#B5B5B5",
  },

  input: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "70%",
  },
});

export default FormInput;
