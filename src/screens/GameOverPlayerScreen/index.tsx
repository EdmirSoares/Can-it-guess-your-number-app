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

export default function GameOverPlayerScreen() {
	const { fadeAnim, losePhrase, handleNavigateToGameScreen } = useApp();
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<MaterialCommunityIcons
					name="robot-excited-outline"
					size={64}
					color="#FFF"
				/>
				<View style={styles.descriptionTextContainer}>
					<Text style={styles.descriptionText}>
						Looks like you cheated...
					</Text>
					<Text style={styles.descriptionText}>{losePhrase}</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={styles.descriptionText}>
						Wanna Play Again?
					</Text>
					<View style={styles.buttonsArea}>
						<Animated.View style={{ opacity: fadeAnim }}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleNavigateToGameScreen}
							>
								<Text style={styles.descriptionText}>Yes!</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>
				</View>
			</View>
		</View>
	);
}
