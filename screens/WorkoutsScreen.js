import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome5";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const WorkoutsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.category}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("AllExercises")}
      >
        <Image
          source={{
            uri: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1130300334%2F0x0.jpg%3Ffit%3Dscale",
          }}
          style={styles.image}
        />
        <View style={styles.imageText}>
          <Text style={styles.categoryText}>All Exercises</Text>
          <FAIcon name="arrow-right" color="white" size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.category}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Routines")}
      >
        <Image
          source={{
            uri: "https://successiblelife.com/wp-content/uploads/2019/07/Workout-Plan-for-Beginners.jpeg",
          }}
          style={styles.image}
        />
        <View style={styles.imageText}>
          <Text style={styles.categoryText}>Your Workout Routine</Text>
          <FAIcon name="arrow-right" color="white" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    marginTop: 30,
  },

  category: {
    width: width - 20,
    height: height / 2.2,
    marginBottom: 10,
  },

  categoryText: {
    fontSize: 25,
    color: "white",
  },

  image: {
    width: width - 20,
    height: height / 2.2,
    resizeMode: "cover",
  },

  imageText: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,.7)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WorkoutsScreen;
