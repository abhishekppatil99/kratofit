import React, { useState } from "react";
import Navigator from "./routes/onboardingStack";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";

import firebase from "firebase";
import { firebaseConfig } from "./config";
//firebase.initializeApp(firebaseConfig);

const getFonts = () => {
  return Font.loadAsync({
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
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
