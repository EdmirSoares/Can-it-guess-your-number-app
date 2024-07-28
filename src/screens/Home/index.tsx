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
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import useApp from "./useApp";
import { useState } from "react";

export default function Home() {
	const [isvisible, setIsVisible] = useState(false);
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
					{!isvisible && (
						<>
							<View style={styles.contentStart}>
								<Text style={styles.startText}>
									{/* {`Outsmart\nThe\nComputer\nCan\nit\nGuess\nYour\nNumber?`} */}
									{`OUTSMART\nTHE COMPUTER!\nCAN IT\nGUESS\nYOUR\nNUMBER?`}
								</Text>
								<Text style={styles.descriptionStartText}>
									{`Think of a number\n			between 1 and 99 and see
									if the computer can guess it!`}
								</Text>
							</View>
							<View style={styles.startButtonContainer}>
								<TouchableOpacity
									style={styles.startButton}
									onPress={() =>
										setIsVisible((prev) => !prev)
									}
								>
									<Text style={styles.startButtonText}>
										Start
									</Text>
								</TouchableOpacity>
							</View>
						</>
					)}
					{isvisible && (
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
								<View style={styles.inputContainer}>
									<TextInput
										style={styles.numberInput}
										maxLength={2}
										keyboardType="numeric"
										cursorColor={"#000"}
										value={enteredNumber}
										onChangeText={(text) =>
											setEnteredNumber(text)
										}
									/>
								</View>
								<View style={styles.textWrapper}>
									<Text style={styles.infoText}>
										Think of a number
									</Text>
									<Text style={styles.infoSubText}>
										Enter a number between 1 and 99 above,
										press confirm to start the game.
									</Text>
								</View>
							</View>
							<View style={styles.buttonContainer}>
								<View style={styles.buttonContainer}>
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

									<PrimaryButton
										textButton="Confirm"
										onPress={confirmInputHandler}
									/>
								</View>
							</View>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
