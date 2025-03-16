import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function CustomSplashScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
}
/* "splash": {
  "image": "./assets/splash-teste.png",
  "resizeMode": "cover",
  "backgroundColor": "#0b0b0b"
}, */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0b0b0b",
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        marginTop: 10,
    },
});
