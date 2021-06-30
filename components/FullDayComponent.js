import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ExerciseComponent2 from "./ExerciseComponent2";

const FullDayComponent = ({ dayObj, restBetweenExercises }) => {
  return (
    <View style={styles.scheduleContainer}>
      <Text style={styles.dayName}>{dayObj.day}</Text>
      <Text style={styles.muscle}>{dayObj.name}</Text>
      {dayObj.exercises.map((exercise) => {
        return (
          <ExerciseComponent2
            exercise={exercise}
            key={exercise.id}
            restBetweenExercises={restBetweenExercises}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleContainer: {
    marginBottom: 80,
  },

  dayName: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#BFBFC9",
    fontSize: 30,
    padding: 10,
  },

  muscle: {
    backgroundColor: "white",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    padding: 5,
    color: "#295784",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default FullDayComponent;
