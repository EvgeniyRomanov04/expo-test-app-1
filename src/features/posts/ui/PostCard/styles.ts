import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { StyleSheet } from "react-native";

export const postCardStyles = StyleSheet.create({
  header: {
    paddingTop: layout.card.paddingTop,
    paddingHorizontal: layout.card.paddingHorizontal,
    paddingBottom: layout.card.paddingBottom,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    borderRadius: 20,
    backgroundColor: colors.background.app,
  },
  footerContainer: {
    paddingTop: layout.footer.paddingTop,
    paddingHorizontal: layout.footer.paddingTop,
    paddingBottom: layout.footer.paddingBottom,
  },
});
