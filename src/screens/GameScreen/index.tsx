import { Text, View } from "react-native";
import styles from "./styles";
import useApp from "./useApp";
import PrimaryButton from "../../components/PrimaryButton";
import PlayButton from "../../components/PlayButton";
import SecondaryButton from "../../components/SecondaryButton";
import { Feather, Octicons } from "@expo/vector-icons";
import Animated, { FadeIn } from "react-native-reanimated";

export default function GameScreen() {
	const {
		randomNumberComputer,
		newGameHandler,
		guessNumberMinHandler,
		guessNumberMaxHandler,
		isDisabled,
		guessRounds,
		randomNumberGenerated,
	} = useApp();

	return (
		<View style={styles.container}>
			<View style={styles.resultContainer}>
				<View style={styles.resultContent}>
					<View style={styles.generatedNumberContainer}>
						<Animated.View entering={FadeIn.duration(500)}>
							<Text style={styles.generatedNumber}>
								{randomNumberGenerated}
							</Text>
						</Animated.View>
					</View>
					<View style={styles.smallTextContainer}>
						<Text style={styles.smallText}>
							Attempts: {guessRounds}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.descriptionTextContainer}>
				{guessRounds > 0 ? (
					<Text style={styles.descriptionText}>
						{`Is the chosen number\ngreater or lesser?`}
					</Text>
				) : (
					<Text style={styles.descriptionText}>
						{`Press guess to\nstart the game.`}
					</Text>
				)}
			</View>

			<View style={styles.buttonsArea}>
				<View style={styles.leftButtonArea}>
					<PlayButton
						textButton={
							isDisabled ? "Guess" : "Greater\nthan or less than?"
						}
						disabled={!isDisabled}
						onPress={() => randomNumberComputer()}
					/>
				</View>

				<View
					style={[
						styles.rightButtonArea,
						{ opacity: !isDisabled ? 1 : 0.3 },
					]}
				>
					<View style={styles.rightEndButtonContainer}>
						<SecondaryButton
							disabled={isDisabled}
							icon={
								isDisabled ? (
									<Octicons
										name="blocked"
										size={20}
										color="#fff"
									/>
								) : (
									<Feather
										name="minus"
										size={24}
										color="white"
									/>
								)
							}
							onPress={guessNumberMinHandler}
						/>
					</View>
					<View style={styles.rightStartButtonContainer}>
						<SecondaryButton
							disabled={isDisabled}
							icon={
								isDisabled ? (
									<Octicons
										name="blocked"
										size={20}
										color="#fff"
									/>
								) : (
									<Feather
										name="plus"
										size={24}
										color="#fff"
									/>
								)
							}
							onPress={guessNumberMaxHandler}
						/>
					</View>
				</View>
			</View>
			<View style={styles.footerContainer}>
				<PrimaryButton
					textButton="Restart Game"
					onPress={newGameHandler}
				/>
			</View>
		</View>
	);
}
