import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

export default function OnboardingScreen({ navigation }) {
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            console.log("Used logged in");
            if (result.additionalUserInfo.isNewUser) {
              console.log("Creating new user");
              firebase
                .database()
                .ref("/users/" + result.user.uid)
                .set({
                  gmail: result.user.email,
                  createdAt: Date.now(),
                  userName: result.user.displayName,
                });
            } else {
              firebase
                .database()
                .ref.child("users/" + result.user.uid)
                .update({
                  last_logged_in: Date.now(),
                });
            }
          })
          .catch((error) => {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "597366679229-e0914bsejmtdcicqresk3a3b8hhpivhn.apps.googleusercontent.com",
        iosClientId:
          "597366679229-6av3t81p63s5k53clqpn85l97tqjs482.apps.googleusercontent.com",

        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  const onPressHandler = () => {
    signInWithGoogleAsync();
  };

  const Next = ({ ...props }) => {
    return (
      <TouchableOpacity style={{ marginRight: 32 }} {...props}>
        <MaterialIcons name="navigate-next" size={32} color="#ffffff" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        bottomBarHighlight={false}
        NextButtonComponent={Next}
        showSkip={false}
        showDone={false}
        pages={[
          {
            backgroundColor: "#212227",
            image: <Image source={require("../assets/favicon.png")} />,
            title: <Text style={globalStyles.title}>Create, Share, Play</Text>,
            subtitle: (
              <Text style={globalStyles.body}>
                Make your own unique workouts and share it with your friends!
              </Text>
            ),
          },
          {
            backgroundColor: "#212227",
            image: (
              <Image source={require("../assets/images/onboarding2.png")} />
            ),
            title: <Text style={globalStyles.title}>Customize Workouts</Text>,
            subtitle: (
              <Text style={globalStyles.body}>
                Make customized workouts for yourself or others according to
                your plan.
              </Text>
            ),
          },
          {
            backgroundColor: "#212227",
            image: (
              <Image source={require("../assets/images/onboarding3.png")} />
            ),
            title: (
              <Text style={globalStyles.title}>Share them with friends</Text>
            ),
            subtitle: (
              <Text style={globalStyles.body}>
                Share the created workouts with friends so that they can achieve
                fitness goals too!
              </Text>
            ),
          },
        ]}
      />
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 32,
          backgroundColor: "#212227",
        }}
      >
        <TouchableOpacity
          onPress={onPressHandler}
          style={{ backgroundColor: "#212227" }}
        >
          <View style={styles.buttonContainer}>
            <Image source={require("../assets/images/google.png")} />
            <Text style={styles.buttonText}>Continue Using Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#212227",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#FF2140",
  },
  buttonText: {
    marginLeft: 16,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "ubuntu-bold",
    textAlign: "center",
  },
});
