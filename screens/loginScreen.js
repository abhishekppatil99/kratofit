import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Header } from "react-native-elements";

export default function LoginScreen({ navigation }) {
  const onPressHandler = () => {
    navigation.replace("Onboarding");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workouts</Text>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212227",
    padding: 32,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontFamily: "ubuntu-bold",
  },
});
