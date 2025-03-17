import { Animated, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';
import styles from "./styles";
import useApp from "./useApp";
import { useDynamicFontSize } from "../../hooks/DynamicFontSize";

export default function WinScreen() {
	const { userNumber, guessRounds, handleNavigateToGameScreen, animatedStyle, fadeAnim, fadeAnims } = useApp();
	const [titleSize, descriptionSize, smallSize] = useDynamicFontSize([24, 16, 14]);
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{[
					{ size: 10, right: '38%', top: "20%" },
					{ size: 12, right: '34%', top: "28%" },
					{ size: 12, right: '40%', top: "25%" },
					{ size: 14, right: '29%', top: "24%" },
					{ size: 14, left: '38%', top: "27%" },
					{ size: 12, left: '40%', top: "20%" },
					{ size: 10, left: '29%', top: "24%" },
					{ size: 12, left: '34%', top: "26%" },
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
					<Text style={[styles.emphasisText, { fontSize: titleSize }]}>
						Ha! I won!
					</Text>
					<Text style={[styles.descriptionText, { fontSize: smallSize }]}>
						Better luck next time!
					</Text>
					<Text style={[styles.descriptionText, { fontSize: smallSize }]}>{`I only needed ${guessRounds} tries to find that ${userNumber}\nwas your number!`}</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						Let's Play Again?
					</Text>
					<Animated.View style={{ opacity: fadeAnim }}>
						<View style={styles.buttonsArea}>
							<TouchableOpacity
								style={styles.button}
								onPress={handleNavigateToGameScreen}
							>
								<Octicons name="smiley" size={18} color="#fff" />
							</TouchableOpacity>
						</View>
					</Animated.View>
				</View>
			</View>
		</View>
	);
}
