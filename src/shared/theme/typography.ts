import * as Manrope from "@expo-google-fonts/manrope";
import { StyleSheet, TextStyle } from "react-native";

type FontKeys = Extract<keyof typeof Manrope, `Manrope_${string}`>;

type ManropeFontMap = {
  [K in FontKeys as Lowercase<K>]: TextStyle;
};

const fontKeys = Object.keys(Manrope).filter((key) => key.includes("Manrope"));

export const fontStyles = StyleSheet.create(
  Object.assign(
    {},
    Object.fromEntries(
      fontKeys.map((key) => [
        key.toLowerCase(),
        { fontFamily: key } as TextStyle,
      ])
    )
  )
) as ManropeFontMap;
