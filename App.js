import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PostLoginScreen from "./screens/PostLoginScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import apiKeys from "./config/keys";

const AppStack = createStackNavigator();

//
export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let route;
  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) return null;
  else if (isFirstLaunch) {
    route = "Onboarding";
  } else {
    route = "Loading";
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName={route}>
        <AppStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ header: () => null }}
        />
        <AppStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <AppStack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            title: "",
            headerStyle: {
              backgroundColor: "#f9fafd",
              shadowColor: "#f9fafd",
              elevation: 0,
            },
          })}
        />
        <AppStack.Screen
          name="PostLogin"
          component={PostLoginScreen}
          options={{ header: () => null }}
        />
        <AppStack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ header: () => null }}
        />
        <AppStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ header: () => null }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
