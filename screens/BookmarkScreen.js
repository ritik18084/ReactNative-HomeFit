import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getAllBookmarks } from "../API/firebaseMethods";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import ExerciseComponent from "../components/ExerciseComponent";

const BookmarkScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [bookmarks, setBookmarks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    getAllBookmarks(setBookmarks, setIsLoading);
    console.log(bookmarks);
  }, []);

  const renderItem = ({ item }) => {
    return <ExerciseComponent item={item} />;
  };

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.heading}>Bookmarks</Text>
      <View style={styles.underline}></View>
      {!bookmarks || bookmarks.length === 0 ? (
        <Text>No exercise has been bookmarked</Text>
      ) : (
        <FlatList
          data={bookmarks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 40,
    width: "100%",
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

  bookmark: {
    width: windowWidth - 50,
    height: windowHeight / 17,
    borderColor: "#BDB7B7",
    borderWidth: 1,
    borderRadius: 10,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default BookmarkScreen;
