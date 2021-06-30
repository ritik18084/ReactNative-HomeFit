import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  Alert,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import TransButton from "../components/TransButton";
import { registration } from "../API/firebaseMethods";

import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";
import * as Facebook from "expo-facebook";
import Config from "../config/keys";

const androidClientId = Config.googleConfig.androidClientId;
const IOSClientId = Config.googleConfig.IOSClientId;
const facebookAppId = Config.facebookConfig.facebookAppId;

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [name, setName] = React.useState();
  const [pass, setPass] = React.useState();
  const [pass2, setPass2] = React.useState();

  const emptyDetails = () => {
    setEmail("");
    setName("");
    setPass("");
    setPass2("");
  };

  const signupHandler = (name, email, pass1, pass2) => {
    if (!name) {
      Alert.alert("Error", "Name is required", [
        { text: "Got it", style: "cancel" },
      ]);
    } else if (!email) {
      Alert.alert("Error", "Email is required", [
        { text: "Got it", style: "cancel" },
      ]);
    } else if (!pass1) {
      Alert.alert("Error", "Password is required", [
        { text: "Got it", style: "cancel" },
      ]);
    } else if (!pass2) {
      Alert.alert("Error", "Password Confirmation is required", [
        { text: "Got it", style: "cancel" },
      ]);
    } else if (pass1.length < 6) {
      Alert.alert("Error", "Password should be at least 6 characters long", [
        { text: "Got it", style: "cancel" },
      ]);
    } else if (pass1 !== pass2) {
      Alert.alert("Error", "Passwords don't match", [
        { text: "Got it", style: "cancel" },
      ]);
    } else {
      registration(email, pass1, name);
      navigation.navigate("Loading");
      emptyDetails();
    }
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
        <Text style={styles.head}>Create an account</Text>
        <FormInput
          labelValue=""
          placeholderText="Name"
          iconType="user"
          autoCapitalize="words"
          autoCorrect={false}
          value={name}
          onChangeText={(name) => setName(name)}
        />
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
          autoCorrect={false}
          value={pass}
          onChangeText={(password) => setPass(password)}
          secureTextEntry={true}
        />
        <FormInput
          labelValue=""
          placeholderText="Confirm Password"
          iconType="lock1"
          autoCapitalize="none"
          autoCorrect={false}
          value={pass2}
          onChangeText={(password) => setPass2(password)}
          secureTextEntry={true}
        />
        <FormButton
          buttonTitle="Sign up"
          onPress={() => signupHandler(name, email, pass, pass2)}
        />
        <Text style={styles.tnc}>
          By signing up, you are agreeing to our Terms of condition
        </Text>
        <SocialButton
          buttonTitle="Sign Up with Google"
          btnType="google"
          color="#B5606C"
          bgColor="white"
          onPress={() => googleSigninHandler()}
        />
        <SocialButton
          buttonTitle="Sign Up with Facebook"
          btnType="facebook"
          color="#005E8D"
          bgColor="white"
          onPress={() => facebookSigninHandler()}
        />
        <TransButton
          buttonText="Have an account? Sign In"
          color="#005E8D"
          onPress={() => navigation.navigate("Login")}
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

  head: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
  },

  tnc: {
    color: "grey",
    fontSize: 10,
    margin: 20,
  },
});

export default SignupScreen;
