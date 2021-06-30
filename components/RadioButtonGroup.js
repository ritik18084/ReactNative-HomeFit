import React from "react";
import RadioButtonRN from "radio-buttons-react-native";
import FAIcons from "react-native-vector-icons/FontAwesome5";

export const RadioButtonGroup = ({ data, handler }) => {
  return (
    <RadioButtonRN
      data={data}
      selectedBtn={(e) => handler(e.code)}
      boxStyle={{
        borderRadius: 20,
        height: 40,
        marginBottom: 0,
        paddingHorizontal: 0,
        paddingVertical: 10,
        marginTop: 5,
        borderWidth: 0,
      }}
      style={{ width: "90%" }}
      animationTypes={["pulse"]}
      activeColor="#2e64e5"
      icon={<FAIcons name="check-circle" color="#2e64e5" size={24} />}
      boxActiveBgColor="#CED1E1"
    />
  );
};

export default RadioButtonGroup;
