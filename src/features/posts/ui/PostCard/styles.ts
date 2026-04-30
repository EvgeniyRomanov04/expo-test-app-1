import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { radius } from "@/shared/design-tokens/radius";
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
    borderRadius: radius.round,
    backgroundColor: colors.background.app,
  },
  footerContainer: {
    paddingTop: layout.footer.paddingTop,
    paddingHorizontal: layout.footer.paddingHorizontal,
    paddingBottom: layout.footer.paddingBottom,
  },
});

export const postSkeletonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.card,
    marginTop: layout.screen.paddingTop,
  },
  headerIcon: {
    height: 40,
    width: 40,
    ...postCardStyles.headerIcon,
    backgroundColor: undefined,
  },
  headerTitle: {
    width: 120,
    height: 20,
    marginLeft: layout.header.marginLeft,
    borderRadius: radius.l,
  },
  imageContainer: {
    aspectRatio: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descTitle: {
    width: 164,
    height: 26,
    borderRadius: radius.xxl,
    marginBottom: 8,
  },
  descText: {
    width: "100%",
    height: 20,
    borderRadius: radius.xxl,
    marginBottom: 16,
  },
  actionsContainer: { flexDirection: "row", columnGap: 8 },
  actionButton: {
    width: 64,
    height: 36,
    borderRadius: radius.xxl,
  },
  stub: {},
});
