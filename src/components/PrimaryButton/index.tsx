import { TouchableOpacity, Text } from "react-native";
import { useDynamicFontSize } from "../../hooks/DynamicFontSize";
import styles from "./styles";

interface PrimaryButtonProps {
	textButton: string;
	onPress: () => void;
}

export default function PrimaryButton({
	textButton,
	onPress,
}: PrimaryButtonProps) {

	const [buttonTextSize] = useDynamicFontSize([14]);
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress()}>
			<Text style={[styles.buttonText, {fontSize: buttonTextSize}]}>{textButton}</Text>
		</TouchableOpacity>
	);
}
