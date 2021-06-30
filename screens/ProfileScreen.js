import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { loggingOut } from "../API/firebaseMethods";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import RadioButtonGroup from "../components/RadioButtonGroup";

import * as firebase from "firebase";
import { setStartingInfo, loadStartingInfo } from "../API/firebaseMethods";

const ProfileScreen = ({ navigation, name, user }) => {
  const logoutHandler = () => {
    loggingOut();
    navigation.navigate("Login");
  };

  const userPicDefault =
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

  const goalData = [
    { label: "Weight Loss", code: 1 },
    { label: "Bulk", code: 2 },
    { label: "Gain Muscle", code: 3 },
    { label: "Maintain", code: 4 },
  ];

  const scheduleData = [
    { label: "Hardcore: 6EDs,1RDs", code: 1 },
    { label: "Elite: 5EDs, 2RDs", code: 2 },
    { label: "Veteran: 4EDs, 3RDs", code: 3 },
    { label: "Starter: 3EDs, 4RDs", code: 4 },
  ];

  const [goal, setGoal] = React.useState();
  const [schedule, setSchedule] = React.useState(2);
  const [showGoal, setShowGoal] = React.useState(4);
  const [showSchedule, setShowSchedule] = React.useState();

  React.useEffect(() => {
    loadStartingInfo(setShowGoal, setShowSchedule, goalData, scheduleData);
  }, []);

  const setGoalHandler = (code) => {
    setGoal(code);
  };
  const setScheduleHandler = (code) => {
    setSchedule(code);
  };
  const saveInfoHandler = () => {
    if (goal && schedule) {
      setStartingInfo(goal, schedule);
      loadStartingInfo(setShowGoal, setShowSchedule, goalData, scheduleData);
    } else {
      Alert.alert(
        "Error",
        "Please select both your goal and preferred schedule to get personalized information"
      );
    }
  };
  //console.log(user);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <View style={styles.profile}>
          <Image
            source={{
              uri: user.photoURL ? user.photoURL : userPicDefault,
            }}
            style={styles.profilePic}
          />
          <Text style={styles.userName}>
            {name}
            {user.emailVerified ? (
              <FAIcons name="check-circle" size={20} color="#0554A4" />
            ) : (
              <></>
            )}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View>
          <Text style={{ color: "black", fontSize: 20 }}>Get Started</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            borderRadius: 30,
            margin: 20,
          }}
        >
          <View style={styles.textBox}>
            <Text style={styles.text}>Choose your fitness goal</Text>
            <View style={styles.border}></View>
            <Text style={{ color: "grey", fontSize: 12 }}>
              Current Goal ={">"} {showGoal}
            </Text>
            <View style={styles.border}></View>
          </View>
          <View
            style={{ width: "100%", alignItems: "center", marginBottom: 30 }}
          >
            <RadioButtonGroup data={goalData} handler={setGoalHandler} />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            borderRadius: 30,
            margin: 20,
          }}
        >
          <View style={styles.textBox}>
            <Text style={styles.text}>Select a suitable workout schedule</Text>
            <View style={styles.border}></View>
            <Text style={{ color: "grey", fontSize: 12 }}>
              Current Schedule ={"> "}
              {showSchedule}
            </Text>
            <View style={styles.border}></View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <RadioButtonGroup
              data={scheduleData}
              handler={setScheduleHandler}
            />
            <View style={styles.desc}>
              <View>
                <Text style={{ fontSize: 10, color: "#707177" }}>
                  *ED: Exercise Day
                </Text>
                <Text style={{ fontSize: 10, color: "#707177" }}>
                  *RD: Rest Day
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => saveInfoHandler()}
        >
          <Text style={{ color: "#1D3194", fontSize: 15 }}>Save</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => logoutHandler()}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.buttonText}>Delete account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    alignItems: "center",
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },

  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 30,
  },

  userName: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },

  email: {
    fontSize: 15,
    color: "grey",
  },

  textBox: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    color: "#1D3194",
    fontWeight: "500",
    paddingBottom: 5,
  },

  border: {
    borderBottomColor: "#B3B9DA",
    borderBottomWidth: 1,
    width: "20%",
    paddingTop: 2,
  },

  desc: {
    width: "90%",
    alignItems: "flex-end",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },

  saveButton: {
    backgroundColor: "white",
    width: "20%",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  logoutButton: {
    flex: 1,
    backgroundColor: "#DEE0EE",
    width: windowWidth / 3,
    height: windowHeight / 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 15,
    color: "#2e64e5",
  },
});

export default ProfileScreen;
