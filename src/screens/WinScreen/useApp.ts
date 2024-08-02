import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { GameScreenNavigationProp } from "../../types/navigation";

interface RouteParams {
	userNumber?: number;
	guessRounds?: number;
}

export default function useApp() {
	const navigation = useNavigation<GameScreenNavigationProp>();
	const route = useRoute<RouteProp<{ params: RouteParams; }, "params">>();

	const userNumber = route.params?.userNumber;
	const guessRounds = route.params?.guessRounds;

	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeAnims = [
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
		useRef(new Animated.Value(0)).current,
	];

	const durations = [1200, 2500, 800, 1500, 1000, 2000, 1300, 600];

	const animatedStyle = (style: any, fadeAnim: Animated.Value) => ({
		...style,
		position: "absolute",
		opacity: fadeAnim,
	});

	useEffect(() => {
		const animations = fadeAnims.map((fadeAnim, index) =>
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: durations[index],
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration: durations[index],
					useNativeDriver: true,
				}),
			])
		);

		const loop = Animated.loop(Animated.stagger(500, animations));

		loop.start();

		return () => loop.stop();
	}, [fadeAnims, durations]);

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
		userNumber,
		guessRounds,
		animatedStyle,
		handleNavigateToGameScreen,
		fadeAnim,
		fadeAnims,
	};
}
