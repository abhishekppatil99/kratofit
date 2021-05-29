import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Icon, Input, Button } from "react-native-elements";

export default function RepBased({ navigation }) {
  const windowHeight = useWindowDimensions().height;
  const input = React.createRef();

  return (
    <View style={{ minHeight: Math.round(windowHeight), flex: 1 }}>
      <View style={styles.mainContainer}>
        {/*Header Elements  */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Rep Based</Text>
          <TouchableOpacity onPress={() => navigation.replace("Dashboard")}>
            <Icon name="close" type="material" color="#FFFFFF" size={32} />
          </TouchableOpacity>
        </View>
        {/* Input Elements */}
        <View style={styles.inputContainer}>
          <Input
            containerStyle={{ paddingHorizontal: 0 }}
            onSubmitEditing={() => input.current.focus()}
            blurOnSubmit={false}
            returnKeyType="next"
            keyboardType="number-pad"
            placeholder="20"
            label="Number of Exercicses"
            leftIcon={{
              type: "material",
              name: "fitness-center",
              color: "#FF2140",
            }}
            inputStyle={{
              color: "#FFFFFF",
              fontSize: 16,
              fontFamily: "open-sans",
            }}
            labelStyle={{
              fontFamily: "ubuntu-bold",
            }}
          />
          <View style={{ paddingTop: 40 }}>
            <Input
              containerStyle={{ paddingHorizontal: 0 }}
              ref={input}
              keyboardType="number-pad"
              placeholder="20"
              label="Reps Per Exercise"
              leftIcon={{
                type: "material",
                name: "repeat",
                color: "#FF2140",
              }}
              inputStyle={{
                color: "#FFFFFF",
                fontSize: 16,
                fontFamily: "open-sans",
              }}
              labelStyle={{
                fontFamily: "ubuntu-bold",
              }}
            />
          </View>
          <Text style={styles.note}>
            Note:{" "}
            <Text style={{ color: "white", fontFamily: "open-sans" }}>
              You can customize each exercise in the next step
            </Text>
          </Text>
        </View>
        {/* Continue Button */}
        <Button
          onPress={() => navigation.navigate("ExerciseList")}
          title="Continue"
          raised={true}
          titleStyle={{ fontFamily: "ubuntu-bold", fontSize: 24, padding: 8 }}
          containerStyle={{ borderRadius: 56 }}
          buttonStyle={{ backgroundColor: "#FF2140" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#212227",
    paddingTop: Platform.OS === "android" ? 57 : 32,
    paddingHorizontal: 32,
    paddingBottom: 32,
    flex: 1,
  },

  //Header Elements
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "ubuntu-bold",
    fontSize: 32,
    color: "white",
  },

  //Input Elements
  inputContainer: {
    flex: 1,
    paddingTop: 128,
  },
  note: {
    paddingTop: 16,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "ubuntu-bold",
    color: "#FF2140",
  },
});
