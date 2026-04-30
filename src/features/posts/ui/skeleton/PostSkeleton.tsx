import { StyleSheet } from "react-native";
import Skeleton from "react-native-reanimated-skeleton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ICustomViewStyle } from "react-native-reanimated-skeleton/lib/typescript/constants";
import { layout } from "@/shared/design-tokens/layout";
import { postCardStyles, postSkeletonStyles } from "../PostCard/styles";

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

const PostSkeletonLayout: ICustomViewStyle = {
  ...postSkeletonStyles.container,
  children: [
    {
      ...postCardStyles.header,
      children: [postSkeletonStyles.headerIcon, postSkeletonStyles.headerTitle],
    },
    {
      ...postSkeletonStyles.imageContainer,
      children: [postSkeletonStyles.image],
    },
    {
      ...postCardStyles.footerContainer,
      children: [
        postSkeletonStyles.descTitle,
        postSkeletonStyles.descText,
        {
          ...postSkeletonStyles.actionsContainer,
          children: [
            postSkeletonStyles.actionButton,
            postSkeletonStyles.actionButton,
          ],
        },
      ],
    },
  ],
};
