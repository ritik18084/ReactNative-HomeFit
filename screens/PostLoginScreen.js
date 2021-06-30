import React from "react";
import { StyleSheet, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen2 from "../screens/HomeScreen2";
import WorkoutNavigatorScreen from "../screens/WorkoutNavigatorScreen";
import ProfileScreen from "./ProfileScreen";
import BookmarkScreen from "./BookmarkScreen";
import LoadingScreen from "./LoadingScreen";
import * as firebase from "firebase";

import FAIcon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const PostLoginScreen = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState();

  const getFirstName = (name) => {
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) == " ") return name.substring(0, i);
    }
    return name;
  };
  try {
    React.useEffect(() => {
      const getUserName = async (currUID) => {
        let doc = await firebase
          .firestore()
          .collection("users")
          .doc(currUID)
          .get();
        if (!doc.exists) {
          Alert.alert("Error", "No such user found!", [
            { text: "Try again", style: "cancel" },
          ]);
          navigation.navigate("Login");
        } else {
          let dataObj = doc.data();
          setName(dataObj.name);
        }
      };

      const getUserDetails = async () => {
        const currUser = await firebase.auth().currentUser;
        setUser(currUser);
        let provider = currUser.providerData[0].providerId;
        if (provider === "google.com" || provider === "facebook.com") {
          setName(getFirstName(currUser.displayName));
        } else {
          getFirstName(getUserName(currUser.uid));
        }
      };

      getUserDetails();
    }, []);
  } catch (err) {
    Alert.alert("Error", err.message);
    navigation.navigate("Login");
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: "#295784",
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <HomeScreen2 name={name} />}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (props) => (
            <FAIcon name="home" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutNavigatorScreen}
        options={{
          tabBarLabel: "Workouts",
          tabBarIcon: (props) => (
            <FAIcon name="dumbbell" size={props.size} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          tabBarLabel: "Bookmarks",
          tabBarIcon: (props) => (
            <FAIcon name="bookmark" size={props.size} color={props.color} />
          ),
          unmountOnBlur: true,
        }}
        // listeners={({ navigation }) => ({
        //   blur: () => navigation.setParams({ screen: undefined }),
        // })}
      />
      <Tab.Screen
        name="Profile"
        children={() => (
          <ProfileScreen name={name} user={user} navigation={navigation} />
        )}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: (props) => (
            <FAIcon name="user" size={props.size} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "#9D9FA1",
  },
});

export default PostLoginScreen;
