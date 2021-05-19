import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnboardingScreen from "../screens/onboardingScreen";
import Dashboard from "../screens/dashboard";
import LoadingScreen from "../screens/loadingScreen";

// To be removed
import RepBased from "../screens/repBased";
import TimerBased from "../screens/timerBased";

const screens = {
  // To be removed
  Dashboard: {
    screen: Dashboard,
  },
  TimerBased: {
    screen: TimerBased,
  },

  RepBased: {
    screen: RepBased,
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
