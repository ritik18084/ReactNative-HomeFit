import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Text,
} from "react-native";
import { windowWidth, windowHeight } from "../utils/Dimensions";
import Icon from "react-native-vector-icons/FontAwesome5";

const Carousel = ({ carouselData }) => {
  const [active, setActive] = React.useState(0);
  const changePage = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.cardView}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={changePage}
        style={styles.scrollView}
      >
        {carouselData.map((obj, index) => {
          return (
            <View
              key={index}
              style={{ width: windowWidth - 10, height: windowHeight / 3 }}
            >
              <Image source={{ uri: obj.image }} style={styles.image} />
              <View style={styles.cardDesc}>
                <Text style={styles.title}>{obj.title}</Text>
                <View style={styles.underline}></View>
                <Text style={styles.desc}>{obj.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.textView}>
        {carouselData.map((i, k) => {
          return (
            <View key={k}>
              {/* <Text
                key={k}
                style={
                  k === active ? styles.pagingActive : styles.pagingInactive
                }
              >
                ⬤
              </Text> */}
              <Icon
                name="minus"
                size={20}
                style={
                  k === active ? styles.pagingActive : styles.pagingInactive
                }
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: windowWidth - 10,
    height: windowHeight / 2.8,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  scrollView: {
    width: windowWidth - 10,
    height: windowHeight / 2.8,
  },

  textView: {
    flexDirection: "row",
    position: "absolute",
    width: windowWidth - 10,
    height: windowHeight / 2.8,
    justifyContent: "center",
    paddingVertical: 10,
    alignItems: "flex-end",
  },

  pagingInactive: {
    color: "#888",
    margin: 3,
  },

  pagingActive: {
    color: "white",
    margin: 3,
  },

  image: {
    width: windowWidth - 10,
    height: windowHeight / 2.8,
    resizeMode: "cover",
  },

  cardDesc: {
    width: "100%",
    height: windowHeight / 2.8,
    position: "absolute",
    paddingLeft: 10,
    justifyContent: "flex-end",
    paddingBottom: 50,
    backgroundColor: "rgba(0,0,0,.5)",
  },

  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "bold",
  },

  underline: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "70%",
  },

  desc: {
    color: "white",
    fontSize: 12,
  },
});

export default Carousel;
