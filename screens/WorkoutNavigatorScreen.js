import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WorkoutsScreen from "./WorkoutsScreen";
import AllExercisesScreen from "./AllExercisesScreen";
import Constants from "expo-constants";
import ExerciseDetailScreen from "./ExerciseDetailScreen";
import WorkoutRoutinesScreen from "./WorkoutRoutinesScreen";

const WorkoutStack = createStackNavigator();

const WorkoutNavigatorScreen = () => {
  return (
    <NavigationContainer
      independent={true}
      options={{ headerForceInset: { top: "never", bottom: "never" } }}
    >
      <WorkoutStack.Navigator initialRouteName={WorkoutsScreen}>
        <WorkoutStack.Screen
          name="WorkoutStartPage"
          component={WorkoutsScreen}
          options={{ header: () => null }}
        />
        <WorkoutStack.Screen
          name="AllExercises"
          component={AllExercisesScreen}
          options={{
            title: "All Exercises",
            headerTitleAlign: "left",
            headerTransparent: true,
            headerStyle: {
              height: 90,
            },
          }}
        />
        <WorkoutStack.Screen
          name="ExerciseDetails"
          component={ExerciseDetailScreen}
          options={{
            title: "",
            headerTitleAlign: "left",
            headerTransparent: true,
            headerStyle: {
              height: 90,
            },
          }}
        />
        <WorkoutStack.Screen
          name="Routines"
          component={WorkoutRoutinesScreen}
          options={{
            title: "",
            headerTransparent: true,
            headerStyle: {
              height: 80,
            },
          }}
        />
      </WorkoutStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default WorkoutNavigatorScreen;
