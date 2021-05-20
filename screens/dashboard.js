import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon, Card, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";

export default function Dashboard({ navigation }) {
  const [workouts, setWorkouts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  const [modal, setModal] = useState(false);

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
                  borderRadius: 32,
                  borderWidth: 0,
                  alignSelf: "center",
                  margin: 20,
                }}
              ></Card>
            );
          })}
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.TouchableOpacityStyle}
          onPress={() => setModal(true)}
        >
          {/* <Image
            source={
              require("../assets/images/addbutton.png")
              //{uri: "https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png",}
            }
            style={styles.FloatingButtonStyle}
          /> */}
          <Icon
            reverse
            iconStyle={{
              alignSelf: "center",
            }}
            name="add"
            type="material"
            color="#FF2140"
            size={28}
          />
        </TouchableOpacity>

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
          isVisible={modal}
          animationType="slide"
          onBackdropPress={() => setModal(false)}
          overlayStyle={{
            width: "100%",
            height: "30%",
            alignSelf: "flex-end",
            marginTop: "auto",
            backgroundColor: "#212227",
            borderTopStartRadius: 32,
            borderTopEndRadius: 32,
          }}
        >
          <Text style={{ color: "white" }}>Hello from Overlay!</Text>
          <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <TouchableOpacity onPress={() => setModal(false)}>
              <Icon
                iconStyle={{ marginLeft: 20, marginTop: 5 }}
                name="close"
                type="material"
                color="#FFFFFF"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row", flex: 7 }}>
            <TouchableOpacity
              onPress={() => navigation.replace("TimerBased")}
              style={{
                alignSelf: "center",
                marginLeft: "17%",
                alignItems: "center",
              }}
            >
              <Icon
                reverse
                iconStyle={{
                  alignSelf: "center",
                }}
                name="timer"
                type="material"
                color="#FF2140"
                size={40}
              />
              <Text style={{ color: "white", fontFamily: "ubuntu-bold" }}>
                Time Based
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.replace("RepBased")}
              style={{
                alignSelf: "center",
                marginLeft: "17%",
                alignItems: "center",
              }}
            >
              <Icon
                reverse
                iconStyle={{
                  alignSelf: "center",
                }}
                name="fitness-center"
                type="material"
                color="#FF2140"
                size={40}
              />
              <Text style={{ color: "white", fontFamily: "ubuntu-bold" }}>
                Rep Based
              </Text>
            </TouchableOpacity>
          </View>
        </Overlay> */}
        <Modal
          isVisible={modal}
          backdropOpacity={0.3}
          onBackdropPress={() => setModal(false)}
          style={{
            margin: 0,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 0.7 }}></View>
            <View
              style={{
                flex: 0.3,
                backgroundColor: "#212227",
                borderTopRightRadius: 32,
                borderTopLeftRadius: 32,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 32,
                  marginLeft: 32,
                }}
              >
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Icon
                    name="close"
                    type="material"
                    color="#FFFFFF"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.8,
                  justifyContent: "space-between",
                  paddingHorizontal: 64,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.replace("TimerBased")}
                  style={{
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    reverse
                    iconStyle={{
                      alignSelf: "center",
                    }}
                    name="timer"
                    type="material"
                    color="#FF2140"
                    size={32}
                  />
                  <Text style={{ color: "white", fontFamily: "ubuntu-bold" }}>
                    Time Based
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.replace("RepBased")}
                  style={{
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    reverse
                    iconStyle={{
                      alignSelf: "center",
                    }}
                    name="fitness-center"
                    type="material"
                    color="#FF2140"
                    size={32}
                  />
                  <Text style={{ color: "white", fontFamily: "ubuntu-bold" }}>
                    Rep Based
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  TouchableOpacityStyle: {
    position: "absolute",
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    right: 32,
    bottom: 32,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 220,
    height: 220,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
});
