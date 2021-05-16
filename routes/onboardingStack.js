import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnboardingScreen from "../screens/onboardingScreen";
import LoginScreen from "../screens/loginScreen";
import LoadingScreen from "../screens/loadingScreen";
import AuthScreen from "../screens/test";

const screens = {
  Login: {
    screen: LoginScreen,
  },
  Loading: {
    screen: LoadingScreen,
  },
  Onboarding: {
    screen: OnboardingScreen,
  },
};

const OnboardingStack = createStackNavigator(screens, { headerMode: "none" });

export default createAppContainer(OnboardingStack);
