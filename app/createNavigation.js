import {
  StackNavigator,
  TabNavigator,
  TabRouter
} from 'react-navigation';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  Welcome,
  Booting,
  Signup,
  Login
} from './Scenes';


const SettingsNavigation = StackNavigator(
  {
    settings: { screen: () => <Text>Settings Screen</Text> },
    settings2: { screen: () => <Text>Settings 2 Screen</Text> }
  }
)

const HomeNavigation = StackNavigator(
  {
    home: { screen: () => <Text>Home Screen</Text> },
    home2: { screen: () => <Text>Home 2 Screen</Text> }
  }
)

const AppNavigation = TabNavigator(
  {
    homeTab: { screen: HomeNavigation },
    rewardsTab: { screen: () => <Text>Rewards screen</Text> },
    settingsTab: { screen: SettingsNavigation },
  }
);

const OnboardingNavigation = StackNavigator(
  {
    waitingList: { screen: () => <Text>Waitinglist</Text> },
    onboarding1: { screen: () => <Text>Onboarding 1</Text> },
    onboarding2: { screen: () => <Text>Onboarding 2</Text> },
    onboarding3: { screen: () => <Text>Onboarding 3</Text> },
  }
);

const RegisterNavigation = StackNavigator(
  {
    welcome: { screen: Welcome, navigationOptions: { header: null }},
    signup: { screen: Signup },
    login: { screen: Login }
  }
);

const RootNavigation = TabNavigator(
  {
    booting: { screen: Booting, path: 'booting'},
    register: { screen: RegisterNavigation, path: 'register'  },
    onboarding: { screen: OnboardingNavigation  },
    app: { screen: AppNavigation },
  },
  {
    initialRouteName: 'booting',
  }
)


export default RootNavigation;
