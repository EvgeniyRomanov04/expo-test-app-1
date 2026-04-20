import { typography } from "@/shared/theme/typography";
import { StyleSheet, Text, View } from "react-native";
import { PostActions } from "./PostActions";
import { PostActionsData } from "./types";
import { postCardStyles } from "./PostCard/styles";
import { Post } from "../api/posts.types";
import Skeleton from "react-native-reanimated-skeleton";
import { radius } from "@/shared/design-tokens/radius";
import { spacing } from "@/shared/design-tokens/spacing";
import { colors } from "@/shared/design-tokens/colors";

interface Props extends PostActionsData {
  title: string;
  text: string;
  tier: Post["tier"];
}
export const PostFooter = ({ text, title, tier, ...actionsData }: Props) => {
  const isPaid = tier === "paid";
  return (
    <View style={postCardStyles.footerContainer}>
      <Skeleton
        isLoading={isPaid}
        animationType="none"
        containerStyle={skeletonStyles.container}
        layout={[skeletonStyles.title, skeletonStyles.text]}
      >
        <Text style={typography.title}>{text}</Text>
        <Text style={typography.body}>{title}</Text>
      </Skeleton>
      {!isPaid && <PostActions {...actionsData} />}
    </View>
  );
};

const skeletonStyles = StyleSheet.create({
  container: {
    rowGap: spacing.s,
  },
  title: {
    height: 26,
    width: "45%",
    borderRadius: radius.xxl,
    backgroundColor: colors.skeleton.background.surface,
  },
  text: {
    height: 40,
    width: "100%",
    borderRadius: radius.xxl,
    backgroundColor: colors.skeleton.background.surface,
  },
});
