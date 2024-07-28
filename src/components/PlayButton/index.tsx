import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface PlayButtonProps {
	textButton: string;
	onPress: () => void;
}

export default function PlayButton({ textButton, onPress }: PlayButtonProps) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>{textButton}</Text>
		</TouchableOpacity>
	);
}
