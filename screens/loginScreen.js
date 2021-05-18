import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Header, Icon, Button, Card, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  const [workouts, setWorkouts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const onPressHandler = () => {
    navigation.replace("Onboarding");
  };

  return (
    <>
      {/* <View style={styles.head}>
        <Header
          containerStyle={{
            height: "auto",
            width: "auto",
            flex: 1,
            paddingTop: 32,
            paddingLeft: 32,
            paddingRight: 32,
            paddingBottom: 32,
            margin: "auto",
            borderBottomColor: "red",
            borderBottomWidth: 2,
          }}
          //leftContainerStyle={{ marginLeft: }}
          backgroundColor="#212227"
          leftComponent={{ icon: "add", color: "#FF2140" }}
          centerComponent={{
            text: "MY WORKOUTS",
            style: {
              fontWeight: "bold",
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
            },
          }}
          rightComponent={{ icon: "settings", color: "#fff" }}
        />
      </View> */}
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Workouts</Text>
          <TouchableOpacity onPress={() => console.log("Settings")}>
            <Icon name="settings" type="material" color="#FFFFFF" size={32} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.workoutContainer}>
          {workouts.map((workout, index) => {
            return (
              <Card
                key={index}
                containerStyle={{
                  width: 500,
                  height: 80,
                  backgroundColor: "#C4C4C4",
                  borderRadius: 400,
                  borderWidth: 0,
                  alignSelf: "center",
                  margin: 20,
                }}
              ></Card>
            );
          })}
        </ScrollView>
        <Button style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>+</Text>
        </Button>
        {/* <TouchableOpacity onPress={() => console.log("Add")} style={{}}>
          <Icon
            name="add"
            type="material"
            color="red"
            reverse={true}
            size={30}
            iconStyle={{ alignSelf: "center", marginTop: 15 }}
          />
        </TouchableOpacity> */}
        {/* <Overlay
          isVisible={true}
          overlayStyle={{
            marginTop: "120%",
            height: 80,
            width: 80,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FF2140",
            borderRadius: 80,
            paddingBottom: 10,
          }}
        ></Overlay> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    alignItems: "flex-start",
  },
  mainContainer: {
    backgroundColor: "#212227",
    paddingTop: Platform.OS === "android" ? 57 : 32,
    paddingHorizontal: 32,
    paddingBottom: 32,
    flex: 1,
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
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: "#fc454e",
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 45,
    marginBottom: 6,
  },
});
