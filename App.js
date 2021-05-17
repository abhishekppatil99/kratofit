import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./routes/onboardingStack";
import AppLoading from "expo-app-loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as Font from "expo-font";

import firebase from "firebase";
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);

const getFonts = () => {
  return Font.loadAsync({
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
