import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

interface PlayButtonProps {
	textButton?: string;
	icon?: ReactNode;
	disabled?: boolean;
	onPress: () => void;
}

export default function PlayButton({
	textButton,
	icon,
	disabled,
	onPress,
}: PlayButtonProps) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>
				{textButton}
				{icon}
			</Text>
		</TouchableOpacity>
	);
}
