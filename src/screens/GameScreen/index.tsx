import { Text, View } from "react-native";
import styles from "./styles";
import useApp from "./useApp";
import PrimaryButton from "../../components/PrimaryButton";
import PlayButton from "../../components/PlayButton";
import SecondaryButton from "../../components/SecondaryButton";
import { Feather, Octicons } from "@expo/vector-icons";
import Animated, { FadeIn } from "react-native-reanimated";
import {useDynamicFontSize} from "../../hooks/DynamicFontSize";

export default function GameScreen() {
	const {
		randomNumberComputer,
		resetGame,
		handleLowerGuess,
		handleHigherGuess,
		isGuessingDisabled,
		guessCount,
		remainingChances,
		currentGuess,
	} = useApp();

	const [titleSize, descriptionSize, smallTextSize] = useDynamicFontSize([82, 14, 12]);

	return (
		<View style={styles.container}>
			<View style={styles.resultContainer}>
				<View style={styles.resultContent}>
					<View style={styles.generatedNumberContainer}>
						<Animated.View entering={FadeIn.duration(500)}>
							<Text style={[styles.generatedNumber, {fontSize: titleSize}]}>
								{currentGuess}
							</Text>
						</Animated.View>
					</View>
					<View style={styles.smallTextContainer}>
						<Text style={[styles.smallText,{ fontSize: smallTextSize}]}>
							CPU Rounds Left: {remainingChances}
						</Text>
						<Text style={[styles.smallText,{ fontSize: smallTextSize}]}>
							Attempts: {guessCount}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.descriptionTextContainer}>
				{guessCount > 0 ? (
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						{`Is the chosen number\ngreater or less?`}
					</Text>
				) : (
					<Text style={[styles.descriptionText, { fontSize: descriptionSize }]}>
						{`Press 'Guess'\nto start the game..`}
					</Text>
				)}
			</View>

			<View style={styles.buttonsArea}>
				<View style={styles.leftButtonArea}>
					<PlayButton
						textButton={
							isGuessingDisabled ? "Guess" : "Greater\nor less?"
						}
						disabled={!isGuessingDisabled}
						onPress={() => randomNumberComputer()}
					/>
				</View>

				<View
					style={[
						styles.rightButtonArea,
						{ opacity: !isGuessingDisabled ? 1 : 0.3 },
					]}
				>
					<View style={styles.rightEndButtonContainer}>
						<SecondaryButton
							disabled={isGuessingDisabled}
							icon={
								isGuessingDisabled ? (
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
							onPress={handleLowerGuess}
						/>
					</View>
					<View style={styles.rightStartButtonContainer}>
						<SecondaryButton
							disabled={isGuessingDisabled}
							icon={
								isGuessingDisabled ? (
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
							onPress={handleHigherGuess}
						/>
					</View>
				</View>
			</View>
			<View style={styles.footerContainer}>
				<PrimaryButton
					textButton="Restart Game"
					onPress={resetGame}
				/>
			</View>
		</View>
	);
}
