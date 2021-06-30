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

const ExerciseComponent = ({ item }) => {
  const [showDesc, setShowDesc] = React.useState(false);
  const [arrow, setArrow] = React.useState("arrow-down");
  const [bookmarkColor, setBookmarkColor] = React.useState("lightgrey");

  const handlePress = () => {
    if (!showDesc) setArrow("arrow-up");
    else setArrow("arrow-down");

    setShowDesc(!showDesc);
  };

  React.useEffect(() => {
    checkBookmark(item, setBookmarkColor);
  }, []);
  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <TouchableOpacity
        style={styles.exerciseCard}
        onPress={() => handlePress()}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{item.name}</Text>
        <Icon name={arrow} size={13} color="#9CA7BC" />
      </TouchableOpacity>
      {showDesc ? (
        <View style={styles.desc}>
          <TouchableWithoutFeedback
            style={styles.bookmarkButton}
            onPress={() => {
              if (bookmarkColor === "lightgrey") {
                setBookmarkColor("black");
                toggleBookmark(item, "add");
              } else {
                setBookmarkColor("lightgrey");
                toggleBookmark(item, "remove");
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
          <Image source={{ uri: item.img }} style={styles.image} />
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
            {item.desc}
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
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseCard: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#295784",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
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
});

export default ExerciseComponent;
