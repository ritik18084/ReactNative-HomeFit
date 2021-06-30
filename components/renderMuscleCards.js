import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome5";

const RenderMuscleCards = ({ exerciseData, navigation }) => {
  const handlePress = (exerciseObj) => {
    navigation.navigate("ExerciseDetails", { exercise: exerciseObj });
  };
  return (
    <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Select a muscle category
      </Text>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            padding: 5,
            borderBottomColor: "#295784",
            borderBottomWidth: 2,
            width: "20%",
            marginBottom: 15,
          }}
        />
      </View>

      {exerciseData.map((obj) => {
        return (
          <TouchableOpacity
            style={styles.muscleCard}
            key={obj.id}
            onPress={() => handlePress(obj)}
          >
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 5,
                color: "white",
                width: "100%",
                textAlign: "center",
              }}
            >
              {obj.muscle}
            </Text>
            <Icon name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  muscleCard: {
    width: "100%",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#295784",
    marginVertical: 5,
  },
});

export default RenderMuscleCards;
