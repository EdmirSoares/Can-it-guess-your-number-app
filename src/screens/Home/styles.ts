import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 40,
		backgroundColor: "#0b0b0b",
		position: "relative",
	},
	contentWrapper: {
		flex: 1,
		justifyContent: "center",
	},
	contentStart: {
		justifyContent: "flex-start",
		flex: 1,
		width: "100%",
		gap: 48,
		marginTop: 62,
	},
	startText: {
		color: "#fff",
		fontSize: 52,
		textAlign: "left",
		fontFamily: "Anton-Regular",

		lineHeight: 62,
	},
	descriptionStartText: {
		color: "#fff",
		fontSize: 16,
		textAlign: "left",
		fontFamily: "Poppins-Regular",
	},
	startButtonContainer: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 36,
		marginRight: 16,
	},
	startButton: {
		width: 120,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderRadius: 99,
		alignItems: "center",
	},
	startButtonText: {
		color: "#0b0b0b",
		fontSize: 14,
		fontFamily: "Poppins-Medium",
	},
	inputWrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		backgroundColor: "#f0f0f0",
		width: 250,
		height: 250,
		borderRadius: 999,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	numberInput: {
		padding: 6,
		width: 220,
		height: 220,
		fontSize: 90,
		fontFamily: "PixelifySans",
		textAlign: "center",
		borderRadius: 999,
		backgroundColor: "#fdfdfd",
	},
	textWrapper: {
		alignItems: "center",
	},
	infoText: {
		color: "#fff",
		fontSize: 18,
		fontFamily: "Poppins-Bold",
	},
	infoSubText: {
		color: "#fff",
		fontSize: 14,
		fontFamily: "Poppins-Regular",
		textAlign: "center",
	},
	buttonContainer: {
		width: "100%",
		marginTop: 56,
		gap: 52,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default styles;
