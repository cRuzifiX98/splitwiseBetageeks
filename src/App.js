import React from "react";
import { Root } from "native-base";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import firebase from "firebase";
import Home from "./screens/home/";
import Anatomy from "./screens/anatomy/";
import SideBar from "./screens/sidebar";
import LoadingScreen from "./screens/Login";
import LoginScreen from "./screens/LoginScreen";
import { firebaseConfig } from "./screens/firebase";
import AddExpense from "./screens/AddExpense";
import AddFriend from "./screens/AddFriend";
import Transaction from "./screens/Transaction";
firebase.initializeApp(firebaseConfig);

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home, param: { ...this.props } },
    Anatomy: { screen: Anatomy },
    Anatomy1: { screen: Anatomy },
    Anatomy2: { screen: Anatomy }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);
const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoadingScreen },
    LoginScreen: { screen: LoginScreen },
    Drawer: { screen: Drawer },
    AddExpense: { screen: AddExpense },
    AddFriend:{screen:AddFriend},
    Transaction:{screen:Transaction}
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
