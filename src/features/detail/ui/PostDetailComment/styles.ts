import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { spacing } from "@/shared/design-tokens/spacing";
import { StyleSheet } from "react-native";

export const commentStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.background.card,
    paddingHorizontal: layout.card.paddingHorizontal,
    paddingVertical: spacing.s,
  },
  header: {
    paddingHorizontal: 0,
  },
});
