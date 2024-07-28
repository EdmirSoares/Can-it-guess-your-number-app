import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "../src/screens/Home";
import GameScreen from "../src/screens/GameScreen";
import { NavigationContainer } from "@react-navigation/native";
import WinScreen from "../src/screens/WinScreen";
import { useEffect } from "react";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

function Provider() {
	const [loaded, error] = useFonts({
		"Poppins-Regular": require("../src/assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
		"Poppins-Medium": require("../src/assets/fonts/Poppins-Medium.ttf"),
		"Anton-Regular": require("../src/assets/fonts/Anton-Regular.ttf"),
		PixelifySans: require("../src/assets/fonts/PixelifySans-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="GameScreen" component={GameScreen} />
				<Stack.Screen name="WinScreen" component={WinScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Provider;
