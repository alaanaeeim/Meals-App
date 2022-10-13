import { Dimensions, StyleSheet, Platform } from "react-native";

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#fff',
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android'? 'hidden' : 'visible',
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {flex: 1},
    buttonPressed: {
        opacity: 0.5,
    },
    title:{
        fontWeight: "bold",
        fontSize: 18,
    }
});

export default styles;