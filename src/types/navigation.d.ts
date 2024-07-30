import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
	Home: undefined;
	GameScreen: { userNumber: number };
	WinScreen: { userNumber: number; guessRounds: number };
	GameOverPlayerScreen: undefined;
	GameOverComputerScreen: undefined;
};

type GameScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"GameScreen"
>;

type GameScreenRouteProp = RouteProp<RootStackParamList, "GameScreen">;

export type {
	RootStackParamList,
	GameScreenNavigationProp,
	GameScreenRouteProp,
};
