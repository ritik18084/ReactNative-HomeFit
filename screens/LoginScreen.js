import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import TransButton from "../components/TransButton";

import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";
import * as Facebook from "expo-facebook";
import Config from "../config/keys";

const androidClientId = Config.googleConfig.androidClientId;
const IOSClientId = Config.googleConfig.IOSClientId;
const facebookAppId = Config.facebookConfig.facebookAppId;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();

  async function signIn(email, password) {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail("");
          setPass("");
          navigation.navigate("Loading");
        });
    } catch (err) {
      Alert.alert(
        "Invalid attempt",
        "Either the password is incorrect or the given email is not registered",
        [{ text: "Try again", style: "cancel" }]
      );
    }
  }

  const signinHandler = (email, pass) => {
    if (!email) {
      Alert.alert(
        "Error",
        "Email is required",
        [{ text: "Got it", style: "cancel" }],
        { cancelable: true }
      );
    } else if (!pass) {
      Alert.alert(
        "Error",
        "Password is required",
        [{ text: "Got it", style: "cancel" }],
        { cancelable: true }
      );
    }

    signIn(email, pass);
  };

  const googleSignIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        IOSClientId: IOSClientId,
      });

      if (result.type === "success") {
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        const googleProfileData = await firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            navigation.navigate("Loading");
          });
      }
    } catch (err) {
      Alert.alert("Error", err.message, [
        { text: "Try again", style: "cancel" },
      ]);
    }
  };

  const googleSigninHandler = async () => {
    await googleSignIn();
  };

  const facebookSignIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: facebookAppId,
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });

      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        // Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        await firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = await firebase.auth.FacebookAuthProvider.credential(
          token
        );

        const facebookProfileData = await firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {
            navigation.navigate("Loading");
          });
      }
    } catch (err) {
      console.log(err.message);
      Alert.alert("Error", err.message, [
        { text: "Try again", style: "cancel" },
      ]);
    }
  };

  const facebookSigninHandler = async () => {
    await facebookSignIn();
  };

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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Image source={require("../assets/logo.jpg")} style={styles.image} />
        <FormInput
          labelValue=""
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelValue=""
          placeholderText="Password"
          iconType="lock1"
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
          value={pass}
          onChangeText={(password) => setPass(password)}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Sign in"
          onPress={() => signinHandler(email, pass)}
        />
        <TransButton buttonText="Forgot Password?" color="#005E8D" />
        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#B5606C"
          bgColor="white"
          onPress={() => googleSigninHandler()}
        />
        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#005E8D"
          bgColor="white"
          onPress={() => facebookSigninHandler()}
        />
        <TransButton
          buttonText="Don't have an account? Create here"
          color="#005E8D"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

export default LoginScreen;
