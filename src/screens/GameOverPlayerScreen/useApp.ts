import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GameScreenNavigationProp } from "../../types/navigation";

export default function useApp() {
	const navigation = useNavigation<GameScreenNavigationProp>();
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const [losePhrase, setLosePhrase] = useState("");

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

	useEffect(() => {
		randomLostPhrase();
	}, []);

	function randomLostPhrase() {
		const phrases = [
			"Nice job, champ!\nYou tried to cheat and instantly lost the game. Impressive skills!",
			"Wow, cheating and losing instantly?\nThat's a new level of dedication to failure!",
			"Cheating and losing in the same game?\nYou must be a pro at this!",
			"That's impressive!\nYou cheated and the game ended instantly.\nMaybe losing is your true talent?",
		];

		const randomIndex = Math.floor(Math.random() * phrases.length);
		setLosePhrase(phrases[randomIndex]);
	}

	function handleNavigateToGameScreen() {
		navigation.navigate("Home");
	}

	return {
		fadeAnim,
		losePhrase,
		handleNavigateToGameScreen,
	};
}
