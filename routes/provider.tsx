import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import Home from "../src/screens/Home";
import GameScreen from "../src/screens/GameScreen";
import { NavigationContainer } from "@react-navigation/native";
import WinScreen from "../src/screens/WinScreen";
import GameOverPlayerScreen from "../src/screens/GameOverPlayerScreen";
import GameOverComputerScreen from "../src/screens/GameOverCpuScreen";
import CustomSplashScreen from "../src/components/SplashScreen";
import { useLoadFonts } from "../src/hooks/LoadFonts";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

function Provider() {

	const { loaded, error } = useLoadFonts();
	SplashScreen.hideAsync();

    if (!loaded && !error) {
        return <CustomSplashScreen />;
    }
	return (
		<>
			<StatusBar
			barStyle="light-content"
			backgroundColor="#0b0b0b" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="GameScreen" component={GameScreen} />
					<Stack.Screen name="WinScreen" component={WinScreen} />
					<Stack.Screen
						name="GameOverPlayerScreen"
						component={GameOverPlayerScreen}
					/>
					<Stack.Screen
						name="GameOverComputerScreen"
						component={GameOverComputerScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

export default Provider;
