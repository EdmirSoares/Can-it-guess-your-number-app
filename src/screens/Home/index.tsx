import {
	View,
	TextInput,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import Animated, { Easing, FadeIn } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import useApp from "./useApp";
import { useState } from "react";
import { useDynamicFontSize } from "../../hooks/DynamicFontSize";


export default function Home() {
	const [isVisible, setIsVisible] = useState(false);
	const [inputSize, titleSize, infoText, descriptionSize, smallTextSize] = useDynamicFontSize([92, 48, 18, 14, 14]);

	const {
		enteredNumber,
		setEnteredNumber,
		confirmInputHandler,
		clearInputHandler,
	} = useApp();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View style={styles.contentWrapper}>
					{!isVisible && (
						<>
							<View style={styles.contentStart}>
								<Animated.View entering={FadeIn.duration(500)}>
									<Text style={[styles.startText, { fontSize: titleSize }]}>
										{`OUTSMART\nTHE COMPUTER!\nCAN IT\nGUESS\nYOUR\nNUMBER?`}
									</Text>
								</Animated.View>
								<Animated.View
									entering={FadeIn.duration(500).delay(300)}
								>
									<Text style={[styles.descriptionStartText, { fontSize: descriptionSize }]}>
										{`Think of a number\n			between 1 and 99 and see
									if the computer can guess it!`}
									</Text>
								</Animated.View>
							</View>
							<View style={styles.startButtonContainer}>
								<Animated.View
									entering={FadeIn.duration(500).delay(600)}
								>
									<TouchableOpacity
										style={styles.startButton}
										onPress={() =>
											setIsVisible((prev) => !prev)
										}
									>
										<Text style={[styles.startButtonText, { fontSize: smallTextSize }]}>
											Start
										</Text>
									</TouchableOpacity>
								</Animated.View>
							</View>
						</>
					)}
					{isVisible && (
						<>
							<View
								style={{
									flex: 1,
									width: "100%",
									justifyContent: "center",
									alignItems: "center",
									gap: 32,
								}}
							>
								<Animated.View entering={FadeIn.duration(500)}>
									<View style={styles.inputContainer}>
										<Animated.View
											entering={FadeIn.duration(
												500
											).delay(300)}
										>
											<TextInput
												style={[styles.numberInput, { fontSize: inputSize }]}
												maxLength={2}
												keyboardType="numeric"
												cursorColor={"#000"}
												value={enteredNumber}
												onChangeText={(text) =>
													setEnteredNumber(text)
												}
											/>
										</Animated.View>
									</View>
								</Animated.View>
								<View style={styles.textWrapper}>
									<Animated.View
										entering={FadeIn.duration(500).delay(
											700
										)}
									>
										<Text style={[styles.infoText, { fontSize: infoText }]}>
											Think of a number
										</Text>
									</Animated.View>
									<Animated.View
										entering={FadeIn.duration(500).delay(
											1000
										)}
									>
										<Text style={[styles.infoSubText, { fontSize: smallTextSize }]}>
											Enter a number between 1 and 99
											above, press confirm to start the
											game.
										</Text>
									</Animated.View>
								</View>
							</View>
							<View style={styles.buttonContainer}>
								<View style={styles.buttonContainer}>
									<Animated.View
										entering={FadeIn.duration(500).delay(
											500
										)}
									>
										<SecondaryButton
											onPress={clearInputHandler}
											icon={
												<Ionicons
													name="trash-bin-outline"
													size={24}
													color="white"
												/>
											}
										/>
									</Animated.View>
									<Animated.View
										entering={FadeIn.duration(500).delay(
											500
										)}
									>
										<PrimaryButton
											textButton="Confirm"
											onPress={confirmInputHandler}
										/>
									</Animated.View>
								</View>
							</View>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
