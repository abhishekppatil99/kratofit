import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Icon, Input, Button, CheckBox } from "react-native-elements";

export default function TimerBased() {
  const windowHeight = useWindowDimensions().height;
  const mpe = React.createRef();
  const spe = React.createRef();
  const set = React.createRef();

  const [rest, setRest] = useState(false);

  const checkBox = () => {
    if (rest) {
      return setRest(false);
    } else {
      return setRest(true);
    }
  };

  return (
    <View style={{ minHeight: Math.round(windowHeight), flex: 1 }}>
      <View style={styles.mainContainer}>
        {/*Header Elements  */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Timer Based</Text>
          <TouchableOpacity onPress={() => console.log("Close Clicked")}>
            <Icon name="close" type="material" color="#FFFFFF" size={32} />
          </TouchableOpacity>
        </View>
        {/* Input Elements */}
        <View style={styles.inputContainer}>
          <Input
            containerStyle={{ paddingHorizontal: 0, paddingEnd: 8 }}
            onSubmitEditing={() => mpe.current.focus()}
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
              color: "#FFFFFF",
            }}
          />

          <View>
            <Text style={styles.inputHeaderText}>Timer per Exercise</Text>
            <View style={styles.timerInput}>
              <View style={styles.timer}>
                <Input
                  ref={mpe}
                  onSubmitEditing={() => spe.current.focus()}
                  containerStyle={{ paddingHorizontal: 0, paddingEnd: 8 }}
                  style={{ justifyContent: "flex-start" }}
                  blurOnSubmit={false}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  placeholder="20"
                  label="Minutes"
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
              <View style={styles.timer}>
                <Input
                  ref={spe}
                  containerStyle={{ paddingHorizontal: 0, paddingStart: 8 }}
                  style={{ justifyContent: "flex-end" }}
                  keyboardType="number-pad"
                  placeholder="20"
                  label="Seconds"
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
            </View>
          </View>

          <CheckBox
            textStyle={{
              fontFamily: "open-sans",
              fontSize: 16,
              color: "#FFFFFF",
            }}
            size={24}
            checked={rest}
            onPress={checkBox}
            iconType="material"
            checkedIcon="check-box"
            checkedColor="#FF2140"
            uncheckedIcon="check-box-outline-blank"
            uncheckedColor="#FF2140"
            center
            title="Include Rest Between Exercises"
            containerStyle={{
              backgroundColor: "#212227",
              borderWidth: 0,
              marginTop: 40,
              marginBottom: 24,
            }}
          />

          <View>
            <Text
              style={
                rest ? styles.inputHeaderText : styles.inputHeaderTextDisabled
              }
            >
              Rest Timer
            </Text>
            <View style={styles.timerInput}>
              <View style={styles.timer}>
                <Input
                  onSubmitEditing={() => set.current.focus()}
                  containerStyle={{ paddingHorizontal: 0, paddingEnd: 8 }}
                  style={{ justifyContent: "flex-start" }}
                  disabled={!rest}
                  blurOnSubmit={false}
                  returnKeyType="next"
                  keyboardType="number-pad"
                  placeholder="20"
                  label="Minutes"
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
              <View style={styles.timer}>
                <Input
                  ref={set}
                  containerStyle={{ paddingHorizontal: 0, paddingStart: 8 }}
                  style={{ justifyContent: "flex-end" }}
                  disabled={!rest}
                  keyboardType="number-pad"
                  placeholder="20"
                  label="Seconds"
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
            </View>
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
          onPress={() => console.log("Continue Clicked")}
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
    paddingTop: 56,
  },
  note: {
    paddingTop: 16,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "ubuntu-bold",
    color: "#FF2140",
  },

  inputHeaderText: {
    paddingBottom: 24,
    fontSize: 16,
    fontFamily: "ubuntu-bold",
    color: "#FFFFFF",
    paddingTop: 8,
  },

  inputHeaderTextDisabled: {
    paddingBottom: 24,
    fontSize: 16,
    fontFamily: "ubuntu-bold",
    color: "grey",
    paddingTop: 8,
  },

  timer: {
    flex: 1,
  },
  timerInput: {
    flexDirection: "row",
  },
});
