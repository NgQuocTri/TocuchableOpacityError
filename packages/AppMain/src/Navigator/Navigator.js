import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    HistoryStackScreen,
    HomeStackScreen,
    NotificationStackScreen,
    ProfileStackScreen
} from "./stackScreen/stackScreen";

const Tab = createBottomTabNavigator()

export default class Navigator extends Component {
    render() {
        return(
            <NavigationContainer>
                {/*Not remove Text tag, it is used to avoid RTCText error in Lerna, */}
                <Text style={{height: 0}}/>
                {this._renderTabControl()}
            </NavigationContainer>
        )
    }

    _renderTabControl() {
        return(
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color}) => {
                        return(
                            <Icon
                                name={this._getIconName(route.name)}
                                color={color}
                                size={focused === true ? 32 : 24}
                            />
                        )
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#4E3F8A'
                    }
                })}
            >
                <Tab.Screen
                    name='Profile'
                    component={ProfileStackScreen}
                />
                <Tab.Screen
                    name='Home'
                    component={HomeStackScreen}
                />
                <Tab.Screen
                    name='History'
                    component={HistoryStackScreen}
                />
                <Tab.Screen
                    name='Notification'
                    component={NotificationStackScreen}
                />
            </Tab.Navigator>
        )
    }

    _getIconName(iconName){
        switch (iconName) {
            case 'Home': return 'home'
            case 'History': return 'library-books'
            case 'Notification': return 'notifications-active'
            case 'Profile': return 'person'
            default: return 'help-center'
        }
    }
}
