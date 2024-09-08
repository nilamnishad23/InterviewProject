import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import { ROUTES } from '../constants/routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.LANDING} screenOptions={{ headerShown: false }} >
            <Stack.Screen name={ROUTES.LANDING} component={LandingScreen} />
            <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} />
            <Stack.Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
            <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
            <Stack.Screen name={ROUTES.PROFILE} component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
