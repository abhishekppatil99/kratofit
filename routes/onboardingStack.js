import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnboardingScreen from "../screens/onboardingScreen";
import LoginScreen from "../screens/loginScreen";
import LoadingScreen from "../screens/loadingScreen";

// To be removed
import RepBased from "../screens/repBased";
import TimerBased from "../screens/timerBased";

const screens = {
  // To be removed
  TimerBased: {
    screen: TimerBased,
  },

  RepBased: {
    screen: RepBased,
  },

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
