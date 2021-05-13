import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnboardingScreen from "../screens/onboardingScreen";
import LoginScreen from "../screens/loginScreen";
import LoadingScreen from "../screens/loadingScreen";
import AuthScreen from "../screens/test";

const screens = {
  Test: {
    screen: AuthScreen,
  },
  Loading: {
    screen: LoadingScreen,
  },
  Onboarding: {
    screen: OnboardingScreen,
  },
  Login: {
    screen: LoginScreen,
  },
};

const OnboardingStack = createStackNavigator(screens, { headerMode: "none" });

export default createAppContainer(OnboardingStack);
