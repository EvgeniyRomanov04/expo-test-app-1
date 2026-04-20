import { colors } from "@/shared/design-tokens/colors";
import { StyleSheet } from "react-native";

export const postCardStyles = StyleSheet.create({
  header: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    borderRadius: 20,
    backgroundColor: colors.background.app,
  },
  footerContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});
