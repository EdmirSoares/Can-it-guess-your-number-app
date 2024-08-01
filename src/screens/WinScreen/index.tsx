import { Animated, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Ionicons, Octicons } from '@expo/vector-icons';
import styles from "./styles";
import useApp from "./useApp";

export default function WinScreen() {
	const { userNumber, guessRounds, animatedStyle, fadeAnims } = useApp();
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{[
					{ size: 10, right: '38%', top: "23.5%" },
					{ size: 12, right: '34%', top: "31%" },
					{ size: 12, right: '40%', top: "28%" },
					{ size: 14, right: '29%', top: "27%" },
					{ size: 14, left: '38%', top: "23%" },
					{ size: 12, left: '40%', top: "28%" },
					{ size: 10, left: '29%', top: "26%" },
					{ size: 12, left: '34%', top: "30%" },
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
					<Text style={styles.descriptionText}>
						This time you won...
					</Text>
					<Text style={styles.descriptionText}>
						The computer has lost!
					</Text>
				</View>
				<View style={styles.playAgainContent}>
					<Text style={styles.descriptionText}>
						Let's Play Again?
					</Text>
					<View style={styles.buttonsArea}>
						<TouchableOpacity
							style={styles.button}

						>
							<Text style={styles.descriptionText}>Yes!</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
