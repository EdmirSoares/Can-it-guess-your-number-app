import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 40,
		gap: 10,
		backgroundColor: "#0b0b0b",
		position: "relative",
	},
	resultContainer: {
		flex: 2.5,
		width: "100%",
	},
	resultContent: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		borderRadius: 18,
		borderColor: "#fff",
		padding: 20,
	},
	generatedNumberContainer: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	generatedNumber: {
		color: "#fff",
		fontSize: 74,
		fontFamily: "PixelifySans",
	},
	smallTextContainer: {
		alignSelf: "flex-end",
	},
	smallText: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "PixelifySans",
		fontSize: 12,
	},
	descriptionTextContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	descriptionText: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "PixelifySans",
		fontSize: 14,
	},
	buttonsArea: {
		flexDirection: "row",
		alignItems: "center",
		flex: 3,
	},
	leftButtonArea: {
		flex: 1.6,
		width: "100%",
	},
	rightButtonArea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	rightEndButtonContainer: {
		alignSelf: "flex-end",
	},
	rightStartButtonContainer: {
		alignSelf: "flex-start",
	},
	footerContainer: { alignItems: "center" },
});

export default styles;
