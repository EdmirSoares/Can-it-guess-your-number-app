import { Button, Text, View } from "react-native";
import styles from "./styles";
import useApp from "./useApp";
import PrimaryButton from "../../components/PrimaryButton";
import PlayButton from "../../components/PlayButton";
import SecondaryButton from "../../components/SecondaryButton";
import { Feather } from "@expo/vector-icons";

export default function GameScreen() {
	const {
		randomNumberComputer,
		newGameHandler,
		guessNumberMinHandler,
		guessNumberMaxHandler,
		userNumber2,
		isvisible,
		guessRounds,
		guessNumberMin,
		guessNumberMax,
		randomNumberGenerated,
	} = useApp();

	return (
		<View style={styles.container}>
			{/* <Button
				title="Start Game"
				onPress={() =>
					randomNumberComputer({
						min: guessNumberMin,
						max: guessNumberMax,
					})
				}
			/> */}
			{!isvisible && (
				<View>
					<Button title="New Game" onPress={newGameHandler} />
				</View>
			)}
			<View
				style={{
					flex: 2,
					width: "100%",
				}}
			>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
						borderWidth: 2,
						borderRadius: 18,
						borderColor: "#fff",
						padding: 20,
					}}
				>
					<View
						style={{
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								color: "#fff",
								textAlign: "center",
								fontFamily: "PixelifySans",
								fontSize: 12,
							}}
						>
							Is the chosen number greater or lesser?
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Text
							style={{
								color: "#fff",
								fontSize: 74,
								fontFamily: "PixelifySans",
							}}
						>
							{randomNumberGenerated}
						</Text>
					</View>
					<View
						style={{
							alignSelf: "flex-end",
						}}
					>
						<Text
							style={{
								color: "#fff",
								textAlign: "center",
								fontFamily: "PixelifySans",
								fontSize: 12,
							}}
						>
							Attempts: {guessRounds}
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					flex: 3,
				}}
			>
				<View
					style={{
						flex: 1.6,
						width: "100%",
					}}
				>
					<PlayButton
						textButton="Guess"
						onPress={() =>
							randomNumberComputer({
								min: guessNumberMin,
								max: guessNumberMax,
							})
						}
					/>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View
						style={{
							alignSelf: "flex-end",
						}}
					>
						<SecondaryButton
							icon={
								<Feather name="minus" size={24} color="white" />
							}
							onPress={guessNumberMinHandler}
						/>
					</View>
					<View
						style={{
							alignSelf: "flex-start",
						}}
					>
						<SecondaryButton
							icon={
								<Feather name="plus" size={24} color="white" />
							}
							onPress={guessNumberMaxHandler}
						/>
					</View>
				</View>
			</View>
			<View style={{ alignItems: "center" }}>
				<PrimaryButton
					textButton="Restart Game"
					onPress={newGameHandler}
				/>
			</View>
		</View>
	);
}
