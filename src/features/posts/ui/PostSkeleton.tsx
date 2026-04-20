import { StyleSheet } from "react-native";
import { postCardStyles } from "./PostCard/styles";
import Skeleton from "react-native-reanimated-skeleton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICustomViewStyle } from "react-native-reanimated-skeleton/lib/typescript/constants";
import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { radius } from "@/shared/design-tokens/radius";

export const PostSkeleton = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Skeleton
      isLoading
      animationDirection="horizontalRight"
      animationType="shiver"
      containerStyle={{
        paddingTop: layout.screen.paddingTop + top,
      }}
      layout={[PostSkeletonLayout, PostSkeletonLayout]}
    />
  );
};

const styles = StyleSheet.create({
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

const PostSkeletonLayout: ICustomViewStyle = {
  ...styles.container,
  children: [
    {
      ...postCardStyles.header,
      children: [styles.headerIcon, styles.headerTitle],
    },
    { ...styles.imageContainer, children: [styles.image] },
    {
      ...postCardStyles.footerContainer,
      children: [
        styles.descTitle,
        styles.descText,
        {
          ...styles.actionsContainer,
          children: [styles.actionButton, styles.actionButton],
        },
      ],
    },
  ],
};
