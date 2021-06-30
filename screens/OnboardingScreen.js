import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Button,
  Text,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Icon from "react-native-vector-icons/FontAwesome";

const Next = ({ ...props }) => (
  //   <View>
  //     <TouchableOpacity style={styles.next}>
  //       <Text>Go</Text>
  //     </TouchableOpacity>
  //   </View>
  <TouchableWithoutFeedback {...props}>
    <Icon.Button
      name="arrow-right"
      backgroundColor="transparent"
      size={25}
      paddingHorizontal={10}
    ></Icon.Button>
  </TouchableWithoutFeedback>
);

const Skip = ({ ...props }) => (
  //   <View>
  //     <TouchableOpacity style={styles.next}>
  //       <Text>Go</Text>
  //     </TouchableOpacity>
  //   </View>
  <TouchableWithoutFeedback {...props}>
    <Icon.Button
      name="forward"
      backgroundColor="transparent"
      size={20}
      paddingHorizontal={20}
    ></Icon.Button>
  </TouchableWithoutFeedback>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      transitionAnimationDuration={150}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      pages={[
        {
          backgroundColor: "#afdbe6",
          image: (
            <Image
              source={require("../assets/workout1.jpg")}
              style={styles.image}
            />
          ),
          title: "Effective At-home",
          subtitle: "Get at home exercises curated to your goals",
        },
        {
          backgroundColor: "#f7f3f0",
          image: (
            <View>
              <Image
                source={require("../assets/workout2.jpg")}
                style={styles.image}
              />
            </View>
          ),
          title: "Flexible Schedule",
          subtitle: "Less time? No worries! We got you covered",
        },
        {
          backgroundColor: "#fefeff",
          image: (
            <View>
              <Image
                source={require("../assets/workout3.jpg")}
                style={styles.image}
              />
            </View>
          ),
          title: "Nutrition tips",
          subtitle: "Get nutrtition tips according to the goal to be achieved",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  image: {
    width: 300,
    height: 300,
  },

  next: {
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default OnboardingScreen;
