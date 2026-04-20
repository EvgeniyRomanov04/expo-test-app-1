import { StyleSheet, View } from "react-native";
import { PostLikeActionButton } from "./PostActionButton/PostLikeActionButton";
import { PostCommentActionButton } from "./PostActionButton/PostCommentActionButton";
import { PostActionsData } from "./types";

interface Props extends PostActionsData {}
export const PostActions = ({ liked, likeCount, commentCount }: Props) => {
  return (
    <View style={styles.container}>
      <PostLikeActionButton active={liked} value={String(likeCount)} />
      <PostCommentActionButton value={String(commentCount)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: "row",
    columnGap: 8,
  },
});
