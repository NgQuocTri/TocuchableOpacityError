import React, {Component} from "react";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {profileDetailStyles} from "./profileDetailStyles";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ProfileDetail extends Component{
    render() {
        return(
            <View style={profileDetailStyles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={profileDetailStyles.containerScrollView}
                >
                    {this._renderCoverPhoto()}
                    {this._renderAvatarCircle()}
                    {this._renderDetailBoard()}
                </ScrollView>
            </View>
        )
    }

    _renderCoverPhoto = () => (
        <View style={profileDetailStyles.welcomeBackground}>
            <ImageBackground
                source={require('../image/trainCoverPhoto.jpg')}
                resizeMode="stretch"
                style={profileDetailStyles.coverPhoto}
            />
        </View>
    )

    _renderAvatarCircle = () => (
        <View style={profileDetailStyles.avatarCircleRim}>
            <View style={profileDetailStyles.avatarCircleCore}>
                <Icon
                    name='person'
                    color='black'
                    size={100}
                />
            </View>
        </View>
    )

    _renderDetailBoard = () => (
        <View style={profileDetailStyles.detailBoard}>
            {this._renderInfoItem('badge', 'Name', 'Nguyen Quoc Tri')}
            {this._renderInfoItem('cake', 'Date of birth', 'April 23 2022')}
            {this._renderInfoItem('phone-iphone', 'Phone number', '0355803075')}
            {this._renderInfoItem('folder-shared', 'ID card number', '1112345678')}
            {this._renderInfoItem('payments', 'Payment method')}
            {this._renderInfoItem('redeem', 'Voucher')}
            {this._renderInfoItem('support-agent', 'Support')}
            {this._renderInfoItem('settings', 'Setting')}
        </View>
    )

    _renderInfoItem = (iconName, infoTitle, info = null) => (
        <TouchableOpacity
            style={profileDetailStyles.infoItemView}
            disabled={info !== null}
            onPress={() => {
                
            }}
        >
            <Icon name={iconName} size={40} color='#4E3F8A'/>
            <Text style={profileDetailStyles.infoItemText}>{infoTitle}</Text>
            {
                info &&
                <View style={profileDetailStyles.infoContent}>
                    <Text style={profileDetailStyles.infoContentText}> : {info}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}
