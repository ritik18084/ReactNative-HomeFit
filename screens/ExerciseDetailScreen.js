import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import ExerciseComponent from "../components/ExerciseComponent";

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { exercise } = route.params;
  const data = exercise.exercises;
  const renderItem = ({ item }) => {
    return <ExerciseComponent item={item} />;
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.heading}>{exercise.muscle}</Text>
      <View style={styles.underline}></View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ width: "90%" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    marginTop: 80,
  },

  heading: {
    fontSize: 30,
    margin: 10,
  },

  underline: {
    borderBottomColor: "#A8C5FF",
    borderBottomWidth: 1,
    width: "50%",
    marginBottom: 20,
  },
});

export default ExerciseDetailScreen;
