import * as Manrope from "@expo-google-fonts/manrope";
import { StyleProp, StyleSheet, TextStyle } from "react-native";

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

export const typography = {
  title: [
    {
      fontSize: 18,
      lineHeight: 26,
    },
    fontStyles.manrope_700bold,
  ],

  body: [
    {
      fontSize: 15,
      lineHeight: 20,
    },
    fontStyles.manrope_500medium,
  ],

  caption: [
    {
      fontSize: 13,
      lineHeight: 18,
    },
    fontStyles.manrope_700bold,
  ],
} satisfies Record<string, StyleProp<TextStyle>>;
