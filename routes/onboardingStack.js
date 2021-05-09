import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import OnboardingScreen from '../screens/onboardingScreen';
import LoginScreen from '../screens/loginScreen';

const screens = {
    Onboarding: {
        screen: OnboardingScreen,
    },
    Login: {
        screen: LoginScreen,
    },
}

const OnboardingStack = createStackNavigator(screens, {headerMode: 'none'});

export default createAppContainer(OnboardingStack);