import {Dimensions, StyleSheet} from "react-native";

export const profileDetailStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerScrollView: {
        width: Dimensions.get('screen').width,
    },
    welcomeBackground: {
        borderWidth: 1,
        height: 190,
        width: 700,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    coverPhoto: {
        flex: 1,
        width: 700,
        borderBottomWidth: 1.5
    },
    avatarCircleRim: {
        backgroundColor: '#4E3F8A',
        height: 200,
        width: 200,
        borderRadius: 100,
        marginTop: 100,
        alignSelf: "center"
    },
    avatarCircleCore: {
        backgroundColor: 'white',
        height: 110,
        width: 110,
        borderRadius: 100,
        marginTop: 45,
        marginLeft: 45,
        alignItems: "center",
    },
    detailBoard: {
        width: 350,
        marginTop: 10,
        marginLeft: 20,
    },
    infoItemView: {
        flexDirection: "row",
        borderWidth: 1,
        marginVertical: 2,
        borderRadius: 10,
        borderRightColor: '#4E3F8A',
        paddingLeft: 5,
        elevation: -5,
    },
    infoItemText: {
        alignSelf: "center",
        marginLeft: 5,
        fontSize: 15,
    },
    infoContent: {
        justifyContent: "center"
    },
    infoContentText: {
        fontWeight: "bold"
    }
})
