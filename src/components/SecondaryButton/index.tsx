import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

interface SecondaryButtonProps {
	onPress: () => void;
	icon: ReactNode;
}

export default function SecondaryButton({
	onPress,
	icon,
}: SecondaryButtonProps) {
	return (
		<TouchableOpacity style={styles.button} onPress={() => onPress()}>
			{icon}
		</TouchableOpacity>
	);
}
