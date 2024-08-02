import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 40,

		backgroundColor: "#0b0b0b",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		flex: 1,
		width: "100%",
		gap: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	descriptionTextContainer: {
		width: "100%",
		gap: 6,
		alignItems: "center",
		justifyContent: "center",
	},
	descriptionText: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "PixelifySans",
		fontSize: 14,
	},
	emphasisText: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "PixelifySans",
		fontSize: 16,
	},
	playAgainContent: {
		height: 200,
		width: "100%",
		gap: 6,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonsArea: {
		flexDirection: "row",
	},
	button: {
		marginTop: 10,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderWidth: 2,
		borderColor: "#fff",
		borderStyle: "dashed",
		borderRadius: 99,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
