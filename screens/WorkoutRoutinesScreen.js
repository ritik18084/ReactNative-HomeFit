import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import { Routines } from "../data/routines";
import FullDayComponent from "../components/FullDayComponent";
import * as firebase from "firebase";
import "firebase/firestore";
import { goalData, scheduleData } from "../data/profileData";

const WorkoutRoutinesScreen = ({ navigation }) => {
  const [goal, setGoal] = React.useState({});
  const [schedule, setSchedule] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [routine, setRoutine] = React.useState({});
  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const currUser = await firebase.auth().currentUser;
        const doc = await firebase
          .firestore()
          .collection("Starting Info")
          .doc(currUser.uid)
          .get();
        const dataObj = doc.data();
        let goalArr = goalData.filter((obj) => obj.code == dataObj.goal);
        setGoal(goalArr[0].label);

        const scheduleObj = scheduleData[dataObj.schedule];
        //console.log(scheduleObj);
        setSchedule(scheduleObj);
        setRoutine(Routines[scheduleObj.code]);
        setIsLoading(false);
      } catch (err) {
        Alert.alert(
          "Error",
          "Update your workout plan in the Profile section to access this feature"
        );
        navigation.navigate("WorkoutStartPage");
      }
    };
    getProfile(setGoal, setSchedule, setIsLoading);
  }, []);

  const renderDay = (props) => {
    const dayObj = props.item;
    return (
      <View>
        <FullDayComponent
          dayObj={dayObj}
          restBetweenExercises={routine.restBetweenExercises}
        />
      </View>
    );
  };

  const headerComponent = () => {
    return (
      <View>
        <Text style={styles.subheading}>Weekly Schedule</Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Text style={styles.workoutHeading}>{routine.name}</Text>
        <Text style={styles.daySplit}>
          {routine.days[0]} Workout days, {routine.days[1]} Rest day(s)
        </Text>
        <FlatList
          data={routine.routine}
          renderItem={renderDay}
          keyExtractor={(item) => item.day}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}
          ListHeaderComponent={headerComponent}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    marginTop: 50,
    width: "100%",
  },

  workoutHeading: {
    width: "100%",
    backgroundColor: "#295784",
    fontSize: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  daySplit: {
    width: "100%",
    backgroundColor: "#295784",
    textAlign: "center",
    color: "white",
    paddingBottom: 10,
  },

  subheading: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    textAlign: "center",
    marginBottom: 40,
    color: "black",
  },
});

export default WorkoutRoutinesScreen;
