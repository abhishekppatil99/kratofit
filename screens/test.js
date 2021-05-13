import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function AuthScreen({ navigation }) {
  const [user, setState] = useState(null);

  useEffect(() => {
    initAsync();
  });

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      // You may ommit the clientId when the firebase `googleServicesFile` is configured
      clientId:
        "597366679229-e0914bsejmtdcicqresk3a3b8hhpivhn.apps.googleusercontent.com",
    });
    _syncUserWithStateAsync();
  };

  _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setState({ user });
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setState({ user: null });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };

  return <Text onPress={onPress()}>Toggle Auth</Text>;
}
