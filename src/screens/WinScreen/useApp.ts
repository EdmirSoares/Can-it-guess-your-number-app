import { RouteProp, useRoute } from "@react-navigation/native";

interface RouteParams {
	userNumber?: number;
	guessRounds?: number;
}

export default function useApp() {
	const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
	const userNumber = route.params?.userNumber;
	const guessRounds = route.params?.guessRounds;

	return {
		userNumber,
		guessRounds,
	};
}
