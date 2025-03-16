import { useMemo } from "react";
import { RFValue } from "react-native-responsive-fontsize";

export const useDynamicFontSize = (sizes: number[]) => {
    return useMemo(() => sizes.map((size) => RFValue(size)), [sizes]);
}