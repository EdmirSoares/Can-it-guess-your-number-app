import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface PrimaryButtonProps {
	textButton: string;
	onPress: () => void;
}

export default function PrimaryButton({
	textButton,
	onPress,
}: PrimaryButtonProps) {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress()}>
			<Text style={styles.buttonText}>{textButton}</Text>
		</TouchableOpacity>
	);
}
