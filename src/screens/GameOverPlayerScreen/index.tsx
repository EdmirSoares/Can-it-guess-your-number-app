import {
	View,
	Text,
	Touchable,
	TouchableOpacity,
	Animated,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons/";
import { useDynamicFontSize } from "../../hooks/DynamicFontSize";
import useApp from "./useApp";
import styles from "./styles";

export default function GameOverPlayerScreen() {
	const { fadeAnim, losePhrase, handleNavigateToGameScreen } = useApp();
	const [ descriptionSize, smallSize] = useDynamicFontSize([16, 14]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<MaterialCommunityIcons
					name="robot-excited-outline"
					size={64}
					color="#FFF"
				/>
				<View style={styles.descriptionTextContainer}>
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						Looks like you cheated...
					</Text>
					<Text style={[styles.descriptionText,{ fontSize: smallSize}]}>{losePhrase}</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						Wanna Play Again?
					</Text>
					<View style={styles.buttonsArea}>
						<Animated.View style={{ opacity: fadeAnim }}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleNavigateToGameScreen}
							>
								<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
									Yes...
								</Text>
							</TouchableOpacity>
						</Animated.View>
					</View>
				</View>
			</View>
		</View>
	);
}
