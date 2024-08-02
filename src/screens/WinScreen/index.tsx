import { Animated, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';
import styles from "./styles";
import useApp from "./useApp";

export default function WinScreen() {
	const { userNumber, guessRounds, handleNavigateToGameScreen, animatedStyle, fadeAnim, fadeAnims } = useApp();
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{[
					{ size: 10, right: '38%', top: "22.5%" },
					{ size: 12, right: '34%', top: "30%" },
					{ size: 12, right: '40%', top: "27%" },
					{ size: 14, right: '29%', top: "26%" },
					{ size: 14, left: '38%', top: "22%" },
					{ size: 12, left: '40%', top: "26%" },
					{ size: 10, left: '29%', top: "27%" },
					{ size: 12, left: '34%', top: "29%" },
				].map((style, index) => (
					<Animated.View
						key={index}
						style={animatedStyle({ ...style }, fadeAnims[index])}
					>
						<Octicons name="north-star" size={style.size} color="#fff" />
					</Animated.View>
				))}
				<MaterialCommunityIcons
					name="trophy-outline"
					size={64}
					color="#FFF"
				/>
				<View style={styles.descriptionTextContainer}>
					<Text style={styles.emphasisText}>
						Ha! I won!
					</Text>
					<Text style={styles.descriptionText}>
						Better luck next time!
					</Text>
					<Text style={styles.descriptionText}>{`I only needed ${guessRounds} tries to find that ${userNumber}\nwas your number!`}</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={styles.descriptionText}>
						Let's Play Again?
					</Text>
					<Animated.View style={{ opacity: fadeAnim }}>
						<View style={styles.buttonsArea}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleNavigateToGameScreen}
							>
								<Octicons name="smiley" size={14} color="#fff" />
							</TouchableOpacity>
						</View>
					</Animated.View>
				</View>
			</View>
		</View>
	);
}
