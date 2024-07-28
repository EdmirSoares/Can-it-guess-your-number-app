import { useState } from "react";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GameScreenNavigationProp } from "../../types/navigation";

export default function useApp() {
	const [enteredNumber, setEnteredNumber] = useState<string>("");
	const navigation = useNavigation<GameScreenNavigationProp>();

	function confirmInputHandler() {
		try {
			const enteredNumberConverted = parseInt(enteredNumber);

			if (isNaN(enteredNumberConverted)) {
				ToastAndroid.show(
					"Please enter a valid number",
					ToastAndroid.SHORT
				);
				setEnteredNumber("");
				return;
			}

			if (enteredNumberConverted > 0 || enteredNumberConverted <= 99) {
				console.log(
					"Navigating to GameScreen with number:",
					enteredNumberConverted
				);
				navigation.navigate("GameScreen", {
					userNumber: enteredNumberConverted,
				});
			}
		} catch (error) {
			console.log(error);
		}
	}

	function clearInputHandler() {
		setEnteredNumber("");
	}

	return {
		enteredNumber,
		setEnteredNumber,
		confirmInputHandler,
		clearInputHandler,
	};
}
