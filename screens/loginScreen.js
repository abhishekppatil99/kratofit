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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212227",
    padding: 32,
    alignItems: "center",
  },
  header: {
    display: "flex",
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    alignSelf: "flex-start",
    marginLeft: -170,
  },
});
