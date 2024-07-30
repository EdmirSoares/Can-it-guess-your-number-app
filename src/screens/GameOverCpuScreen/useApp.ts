import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GameScreenNavigationProp } from "../../types/navigation";

export default function useApp() {
	const navigation = useNavigation<GameScreenNavigationProp>();
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		const loop = Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			])
		);

		loop.start();

		return () => loop.stop();
	}, [fadeAnim]);

	function handleNavigateToGameScreen() {
		navigation.navigate("Home");
	}

	return {
		fadeAnim,
		handleNavigateToGameScreen,
	};
}
