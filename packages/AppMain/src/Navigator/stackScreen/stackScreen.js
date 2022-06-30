import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "home";
import History from "history";
import Notification from "notification";
import Profile from "profile";
import {headerStyles} from "./stackScreenStyles";

const HomeStack = createNativeStackNavigator()
const HistoryStack = createNativeStackNavigator()
const NotificationStack = createNativeStackNavigator()
const ProfileStack = createNativeStackNavigator()

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='Home'
                component={Home}
                options={() => (headerStyles)}
            />
        </HomeStack.Navigator>
    )
}

export const HistoryStackScreen = () => {
    return(
        <HistoryStack.Navigator>
            <HistoryStack.Screen
                name='History'
                component={History}
                options={() => (headerStyles)}
            />
        </HistoryStack.Navigator>
    )
}

export const NotificationStackScreen = () => {
    return(
        <NotificationStack.Navigator>
            <NotificationStack.Screen
                name='Notification'
                component={Notification}
                options={() => (headerStyles)}
            />
        </NotificationStack.Navigator>
    )
}

 export const ProfileStackScreen = ()  => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name='Profile'
                component={Profile}
                options={() => (headerStyles)}
            />
        </ProfileStack.Navigator>
    )
}
