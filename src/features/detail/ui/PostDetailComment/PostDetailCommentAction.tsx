import {
  PostActiveLikeIcon,
  PostLikeIcon,
} from "@/features/posts/ui/PostActionButton/icons";
import { baseColors, colors } from "@/shared/design-tokens/colors";
import { typography } from "@/shared/theme/typography";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  liked: boolean;
  count: number;
}
export const PostDetailCommentAction = ({ liked, count }: Props) => {
  return (
    <View style={styles.container}>
      {liked ? (
        <PostActiveLikeIcon mainColor={colors.action.like.primary} />
      ) : (
        <PostLikeIcon />
      )}
      <Text style={[typography.caption, styles.count]}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  count: {},
});
