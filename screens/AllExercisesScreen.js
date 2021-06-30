import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import exerciseData from "../data/exerciseData";
import RenderMuscleCards from "../components/renderMuscleCards";
import Icon from "react-native-vector-icons/FontAwesome5";

const AllExercisesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <RenderMuscleCards exerciseData={exerciseData} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    width: "100%",
    marginTop: 80,
  },
});

export default AllExercisesScreen;
