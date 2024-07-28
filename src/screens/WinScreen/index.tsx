import { Text, View } from "react-native";
import useApp from "./useApp";

export default function WinScreen() {
	const { userNumber, guessRounds } = useApp();
	return (
		<View>
			<Text>
				{userNumber} --- {guessRounds}
			</Text>
		</View>
	);
}
