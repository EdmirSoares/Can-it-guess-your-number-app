import {
	View,
	Text,
	Touchable,
	TouchableOpacity,
	Animated,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import useApp from "./useApp";
import styles from "./styles";
import { useDynamicFontSize } from "../../hooks/DynamicFontSize";

export default function GameOverComputerScreen() {
	const { fadeAnim, handleNavigateToGameScreen } = useApp();
	const [descriptionSize, smallSize] = useDynamicFontSize([16, 14]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<MaterialCommunityIcons
					name="robot-dead-outline"
					size={64}
					color="#FFF"
				/>
				<View style={styles.descriptionTextContainer}>
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						This time you won...
					</Text>
					<Text style={[styles.descriptionText, { fontSize: smallSize }]}>
						The computer has lost!
					</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						{
							`It was a close call!\nLet's Play Again?`
						}
					</Text>
					<View style={styles.buttonsArea}>
						<Animated.View style={{ opacity: fadeAnim }}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleNavigateToGameScreen}
							>
								<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>Yes!</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>
				</View>
			</View>
		</View>
	);
}
