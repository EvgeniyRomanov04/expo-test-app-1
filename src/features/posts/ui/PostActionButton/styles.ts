import { colors } from "@/shared/design-tokens/colors";
import { StyleSheet } from "react-native";

export const disabledStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.card,
  },
  text: {
    color: colors.text.disabled,
  },
});
