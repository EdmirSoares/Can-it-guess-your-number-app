import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { GameScreenNavigationProp } from "../../types/navigation";

interface RouteParams {
	userNumber?: number;
}

export default function useApp() {
	const [isGuessingDisabled, setIsGuessingDisabled] = useState(true);
	const [guessCount, setGuessCount] = useState(0);
	const [remainingChances, setRemainingChances] = useState(7);
	const [upperLimit, setUpperLimit] = useState(99);
	const [lowerLimit, setLowerLimit] = useState(1);
	const [currentGuess, setCurrentGuess] = useState(0);

	const route = useRoute<RouteProp<{ params: RouteParams; }, "params">>();
	const userNumber = route.params?.userNumber || 0;
	const navigation = useNavigation<GameScreenNavigationProp>();

	function checkPlayerVictory(
		playerNumber: number,
		computerNumber: number
	) {
		if (playerNumber === computerNumber) {
			navigation.navigate("WinScreen", {
				userNumber: userNumber,
				guessRounds: guessCount,
			});
		}
		return;
	}

	function navigateToLossScreen(screen: string) {
		if (screen === "GameOverComputerScreen") {
			navigation.navigate("GameOverComputerScreen");
		}
		if (screen === "GameOverPlayerScreen") {
			navigation.navigate("GameOverPlayerScreen");
			return;
		}
	}

	function makeComputerGuess(
		lessThan = upperLimit,
		moreThan = lowerLimit
	) {
		const randomNumber = Math.floor(
			Math.random() * (moreThan - lessThan + 1) + lessThan
		);

		setCurrentGuess(randomNumber);

		if (remainingChances === 0) {
			navigateToLossScreen("GameOverComputerScreen");
			return;
		}

		if (randomNumber === userNumber) {
			checkPlayerVictory(userNumber, randomNumber);
			return;
		}

		if (guessCount < 7) {
			setIsGuessingDisabled(false);
			setGuessCount((prev) => prev + 1);
			setRemainingChances((prev) => prev - 1);
			setCurrentGuess(randomNumber);
			return;
		}
	}

	function handleLowerGuess() {
		if (currentGuess < userNumber) {
			navigateToLossScreen("GameOverPlayerScreen");
			return;
		} else {
			setIsGuessingDisabled((prev) => !prev);
			setUpperLimit(currentGuess);
		}
	}

	function handleHigherGuess() {
		if (currentGuess > userNumber) {
			navigateToLossScreen("GameOverPlayerScreen");
			return;
		} else {
			setIsGuessingDisabled((prev) => !prev);
			setLowerLimit(currentGuess);
		}
	}

	function resetGame() {
		setIsGuessingDisabled(true);
		setCurrentGuess(0);
		setGuessCount(0);
		setRemainingChances(7);
		setUpperLimit(99);
		setLowerLimit(1);
		navigation.push("Home");
	}

	return {
		randomNumberComputer: makeComputerGuess,
		resetGame,
		handleLowerGuess,
		handleHigherGuess,
		userNumber,
		isGuessingDisabled,
		guessCount,
		remainingChances,
		upperLimit,
		lowerLimit,
		currentGuess,
	};
}
