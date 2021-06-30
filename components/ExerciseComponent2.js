import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome5";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { toggleBookmark, checkBookmark } from "../API/firebaseMethods";

const ExerciseComponent2 = ({ exercise, restBetweenExercises }) => {
  const [showDesc, setShowDesc] = React.useState(false);
  const [arrow, setArrow] = React.useState("arrow-down");
  const [bookmarkColor, setBookmarkColor] = React.useState("lightgrey");

  const handlePress = () => {
    if (!showDesc) setArrow("arrow-up");
    else setArrow("arrow-down");

    setShowDesc(!showDesc);
  };

  React.useEffect(() => {
    checkBookmark(exercise, setBookmarkColor);
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableWithoutFeedback onPress={() => handlePress()}>
        <View style={styles.exerciseCard}>
          <Text style={{ color: "white", fontSize: 20 }}>{exercise.name}</Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Sets <Icon name="arrow-right" size={12} color="white" />{" "}
            {exercise.sets}
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Rest in between Sets{" "}
            <Icon name="arrow-right" size={12} color="white" /> {exercise.rest}s
          </Text>
          {exercise.reps ? (
            <Text style={{ color: "white", fontSize: 15 }}>
              Reps <Icon name="arrow-right" size={12} color="white" />{" "}
              {exercise.reps[0]} to {exercise.reps[1]}
            </Text>
          ) : (
            <Text style={{ color: "white", fontSize: 15 }}>
              Time <Icon name="arrow-right" size={12} color="white" />{" "}
              {exercise.time}s
            </Text>
          )}
          <Icon name={arrow} size={13} color="#9CA7BC" />
        </View>
      </TouchableWithoutFeedback>
      {showDesc ? (
        <View style={styles.desc}>
          <TouchableWithoutFeedback
            style={styles.bookmarkButton}
            onPress={() => {
              if (bookmarkColor === "lightgrey") {
                setBookmarkColor("black");
                toggleBookmark(exercise, "add");
              } else {
                setBookmarkColor("lightgrey");
                toggleBookmark(exercise, "remove");
              }
            }}
          >
            <FAIcon
              name="bookmark"
              color={bookmarkColor}
              size={25}
              backgroundColor="white"
            />
          </TouchableWithoutFeedback>
          <View
            style={{
              borderBottomColor: "#9CA7BC",
              borderBottomWidth: 3,
              width: "40%",
              marginTop: 10,
            }}
          />
          <Image source={{ uri: exercise.img }} style={styles.image} />
          <View
            style={{
              borderBottomColor: "#9CA7BC",
              borderBottomWidth: 1,
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 15 }}>How To</Text>
          </View>
          <Text style={{ marginBottom: 10, textAlign: "center" }}>
            {exercise.desc}
          </Text>
          <View
            style={{
              borderBottomColor: "#9CA7BC",
              borderBottomWidth: 3,
              width: "40%",
            }}
          />
        </View>
      ) : (
        <></>
      )}
      <Text style={styles.rest}>Rest {restBetweenExercises}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseCard: {
    width: "100%",
    padding: 10,
    backgroundColor: "#295784",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: windowHeight / 3,
    resizeMode: "contain",
    marginVertical: 10,
  },

  desc: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },

  rest: {
    fontSize: 20,
    color: "#09065E",
    backgroundColor: "white",
    width: "100%",
    textAlign: "center",
    padding: 10,
  },
});

export default ExerciseComponent2;
