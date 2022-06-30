import React, {Component} from "react";
import {LogBox} from "react-native";
import OpeningScreen from "./src/OpeningScreen/OpeningScreen";
import Navigator from "./src/Navigator/Navigator";

export default class App extends Component {
    render() {
        LogBox.ignoreAllLogs()
        LogBox.ignoreLogs(['Warning:...'])
        return(
            // <OpeningScreen/>
            <Navigator/>
        )
    }
}
