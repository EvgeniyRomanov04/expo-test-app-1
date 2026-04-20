import { StyleSheet } from "react-native";
import { postCardStyles } from "./PostCard/styles";
import Skeleton from "react-native-reanimated-skeleton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICustomViewStyle } from "react-native-reanimated-skeleton/lib/typescript/constants";
import { colors } from "@/shared/design-tokens/colors";

export const PostSkeleton = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Skeleton
      isLoading
      animationDirection="horizontalRight"
      animationType="shiver"
      containerStyle={{ paddingTop: 16 + top }}
      layout={[PostSkeletonLayout, PostSkeletonLayout]}
    />
  );
};

const defaultStyles = StyleSheet.create({
  radius: {
    borderRadius: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.card,
    marginTop: 16,
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
    marginLeft: 12,
    ...defaultStyles.radius,
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
    borderRadius: 22,
    marginBottom: 8,
  },
  descText: {
    width: 361,
    height: 20,
    borderRadius: 22,
    marginBottom: 16,
  },
  actionsContainer: { flexDirection: "row", columnGap: 8 },
  actionButton: {
    width: 64,
    height: 36,
    borderRadius: 22,
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
