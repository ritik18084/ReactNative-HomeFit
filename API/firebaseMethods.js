import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";
import Config from "../config/keys";
import { goalData, scheduleData } from "../data/profileData";

const androidClientId = Config.googleConfig.androidClientId;
const IOSClientId = Config.googleConfig.IOSClientId;
const facebookAppId = Config.facebookConfig.facebookAppId;

export async function registration(email, password, name) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      name: name,
    });
  } catch (err) {
    Alert.alert(
      "Error",
      err.message,
      [{ text: "Try again", style: "cancel" }],
      { cancelable: true }
    );
  }
}

export async function signIn(email, password) {
  var flag = true;
  try {
    const ProfileData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        Alert.alert(
          "Invalid credentials",
          "Either the email or password provided is incorrect",
          [{ text: "Try again", style: "cancel" }]
        );
        flag = false;
      })
      .then(() => {
        return flag;
      });
  } catch (err) {
    Alert.alert(
      "Invalid attempt",
      err.message,
      [{ text: "Try again", style: "cancel" }],
      { cancelable: true }
    );
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export const setStartingInfo = async (goal, schedule) => {
  try {
    const currUser = await firebase.auth().currentUser;
    const db = firebase.firestore();
    await db.collection("Starting Info").doc(currUser.uid).set({
      goal: goal,
      schedule: schedule,
    });
    Alert.alert("Done", "Your choices have been saved");
  } catch (err) {
    Alert.alert(
      "Error",
      err.message,
      [{ text: "Try again", style: "cancel" }],
      { cancelable: true }
    );
  }
};

export const loadStartingInfo = async (
  setShowGoal,
  setShowSchedule,
  goalData,
  scheduleData
) => {
  try {
    const currUser = await firebase.auth().currentUser;
    const doc = await firebase
      .firestore()
      .collection("Starting Info")
      .doc(currUser.uid)
      .get();
    const dataObj = doc.data();
    let goalArr = goalData.filter((obj) => obj.code == dataObj.goal);
    let scheduleArr = scheduleData.filter(
      (obj) => obj.code == dataObj.schedule
    );
    setShowGoal(goalArr[0].label);
    setShowSchedule(scheduleArr[0].label);
  } catch (err) {}
};

export const toggleBookmark = async (exercise, action) => {
  try {
    const currUser = await firebase.auth().currentUser;
    var initialArr = [];
    initialArr.push(exercise);
    const doc = await firebase
      .firestore()
      .collection("Bookmarks")
      .doc(currUser.uid)
      .get();
    const dataObj = doc.data();

    if (!dataObj) {
      await firebase.firestore().collection("Bookmarks").doc(currUser.uid).set({
        bookmarks: initialArr,
      });

      doc = await firebase
        .firestore()
        .collection("Bookmarks")
        .doc(currUser.uid)
        .get();

      dataObj = doc.data();
    } else {
      var arr = dataObj.bookmarks;
      if (action === "remove") {
        arr = arr.filter((obj) => obj.id !== exercise.id);
      } else if (action === "add") {
        arr = arr.filter((obj) => obj.name !== exercise.name);
        arr.push(exercise);
      }

      await firebase.firestore().collection("Bookmarks").doc(currUser.uid).set({
        bookmarks: arr,
      });
    }
  } catch (err) {}
};

export const checkBookmark = async (exercise, setBookmarkColor) => {
  try {
    const currUser = await firebase.auth().currentUser;
    const doc = await firebase
      .firestore()
      .collection("Bookmarks")
      .doc(currUser.uid)
      .get();
    const dataObj = doc.data();
    if (!dataObj) return;

    let trendingExercise = dataObj.bookmarks.filter(
      (obj) => obj.id === exercise.id
    );
    //console.log(trendingExercise);
    if (trendingExercise.length > 0) setBookmarkColor("black");
    else setBookmarkColor("lightgrey");
  } catch (err) {}
};

export const getAllBookmarks = async (setBookmarks, setIsLoading) => {
  try {
    const currUser = await firebase.auth().currentUser;
    const doc = await firebase
      .firestore()
      .collection("Bookmarks")
      .doc(currUser.uid)
      .get();
    const dataObj = doc.data();
    if (!dataObj || !dataObj.bookmarks) setBookmarks([]);
    else {
      // console.log(dataObj.bookmarks);
      setBookmarks(dataObj.bookmarks);
    }
    setIsLoading(false);
  } catch (err) {}
};
