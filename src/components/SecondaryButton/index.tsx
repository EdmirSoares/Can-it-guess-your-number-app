import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

interface SecondaryButtonProps {
	onPress: () => void;
	disabled?: boolean;
	icon: ReactNode;
}

export default function SecondaryButton({
	onPress,
	disabled,
	icon,
}: SecondaryButtonProps) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={() => onPress()}
			disabled={disabled}
		>
			{icon}
		</TouchableOpacity>
	);
}
