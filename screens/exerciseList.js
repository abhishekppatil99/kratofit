import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Icon, Input, Button, CheckBox, Card } from "react-native-elements";

export default function Dashboard({ navigation }) {
  //const [workouts, setWorkouts] = useState([]);
  const [exNum, setExNum] = useState(11);
  var workouts = [];
  var i;
  for (i = 0; i <= exNum; i++) {
    if (i % 2 == 0) {
      workouts.push("workout");
    } else {
      workouts.push("rest");
    }
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Edit Exercises</Text>
          <TouchableOpacity onPress={() => navigation.replace("Dashboard")}>
            <Icon name="close" type="material" color="#FFFFFF" size={32} />
          </TouchableOpacity>
        </View>
        <Button
          title="Save"
          titleStyle={{ fontFamily: "ubuntu-bold", fontSize: 24 }}
          containerStyle={{
            borderRadius: 56,
            height: 48,
            width: 123,
            alignSelf: "center",
          }}
          buttonStyle={{ backgroundColor: "#FF2140" }}
        ></Button>
      </View>
      <ScrollView style={styles.workoutContainer}>
        {workouts.map((workout, index) => {
          if (workout === "workout") {
            return (
              <TouchableOpacity>
                <Card
                  key={index + workout}
                  containerStyle={{
                    width: 347,
                    height: 82,
                    backgroundColor: "#16171C",
                    borderColor: "#FF2140",
                    borderRadius: 10,
                    borderWidth: 2,
                    alignSelf: "center",
                    margin: 20,
                  }}
                ></Card>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity>
                <Card
                  key={index + workout}
                  containerStyle={{
                    width: 347,
                    height: 82,
                    backgroundColor: "#212227",
                    borderRadius: 10,
                    borderWidth: 0,
                    alignSelf: "center",
                    margin: 20,
                  }}
                ></Card>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    //flex: 1,
    alignItems: "flex-start",
  },
  mainContainer: {
    backgroundColor: "#212227",
    paddingTop: Platform.OS === "android" ? 57 : 32,
    paddingHorizontal: 32,
    paddingBottom: 32,
    //flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 32,
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontFamily: "ubuntu-bold",
  },
  workoutContainer: {
    flex: 4,
    backgroundColor: "#16171C",
    width: "100%",
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    right: 32,
    bottom: 32,
  },
});
