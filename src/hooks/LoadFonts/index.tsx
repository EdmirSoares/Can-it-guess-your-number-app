import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

export const useLoadFonts = () => {
    const [loaded, error] = useFonts({
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "Anton-Regular": require("../../assets/fonts/Anton-Regular.ttf"),
        "PixelifySans": require("../../assets/fonts/PixelifySans-Regular.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            if (loaded || error) {
                await SplashScreen.hideAsync();
            }
        }
        prepare();
    }, [loaded, error]);

    return { loaded, error };
};
