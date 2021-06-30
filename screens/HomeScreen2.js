import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  BackHandler,
  Dimensions,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as firebase from "firebase";
import exerciseData from "../data/exerciseData";
import Carousel from "../components/Carousel";
import { carouselData } from "../data/allData";
import Icon from "react-native-vector-icons/FontAwesome";
import { toggleBookmark, checkBookmark } from "../API/firebaseMethods";
// import { windowWidth, windowHeight } from "../utils/Dimensions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen2 = ({ name }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "" + mm + "" + dd;
  var number = parseInt(today, 10);

  var allExercises = [];
  exerciseData.map((obj) => {
    obj.exercises.map((exercise) => {
      allExercises.push(exercise);
    });
  });

  //allExercises.sort(() => Math.random() - 0.5);

  number = number % allExercises.length;

  const [trendingExercise, setTrendingExercise] = React.useState("");
  React.useEffect(() => {
    setTrendingExercise(allExercises[number]);
    //console.log(trendingExercise);
  }, [number]);

  const [bookmarkColor, setBookmarkColor] = React.useState("lightgrey");
  React.useEffect(() => {
    checkBookmark(trendingExercise, setBookmarkColor);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Exit?", "Are you sure you want to exit the app?", [
          { text: "No", onPress: () => null, style: "cancel" },
          { text: "Yes", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.greeting}>Welcome {name ? name : ""},</Text>

      <View style={styles.trendingContainer}>
        <Text style={styles.trendingTitle}>Highlighted Exercise</Text>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            width: "80%",
            margin: 10,
          }}
        ></View>
        {/* <Image
            source={{
              uri: imageData.results[num].image,
            }}
            style={styles.trendingImage}
          /> */}
        <View style={styles.trendContent}>
          <Text
            style={{
              fontSize: 25,
              color: "#295784",
            }}
          >
            {trendingExercise.name}
          </Text>

          <View
            style={{
              borderBottomColor: "#7B7EAB",
              borderBottomWidth: 1,
              width: "20%",
              marginVertical: 10,
            }}
          ></View>

          <Text>{trendingExercise.desc}</Text>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: 10,
            }}
          >
            <TouchableWithoutFeedback
              style={styles.bookmarkButton}
              onPress={() => {
                if (bookmarkColor === "lightgrey") {
                  setBookmarkColor("black");
                  toggleBookmark(trendingExercise, "add");
                } else {
                  setBookmarkColor("lightgrey");
                  toggleBookmark(trendingExercise, "remove");
                }
              }}
            >
              <Icon
                name="bookmark"
                color={bookmarkColor}
                size={25}
                backgroundColor="white"
              />
            </TouchableWithoutFeedback>
          </View>
          {/* {console.log(targetedMuscle)} */}
        </View>
      </View>
      <Carousel carouselData={carouselData} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 30,
  },

  greeting: {
    fontSize: 30,
    width: "100%",
    paddingHorizontal: 20,
    color: "#295784",
    fontWeight: "bold",
    marginBottom: 30,
  },

  trendingContainer: {
    width: windowWidth - 30,
    borderRadius: 20,
    backgroundColor: "#295784",
    padding: 10,
    alignItems: "center",
  },

  trendingTitle: {
    color: "white",
    fontSize: 20,
  },

  trendingImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  trendContent: {
    alignItems: "flex-start",
    width: "97%",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },

  bookmarkButton: {},
});

export default HomeScreen2;
