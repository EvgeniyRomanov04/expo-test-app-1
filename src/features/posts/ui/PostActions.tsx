import { StyleSheet, View } from "react-native";
import { PostLikeActionButton } from "./PostActionButton/PostLikeActionButton";
import { PostCommentActionButton } from "./PostActionButton/PostCommentActionButton";
import { PostActionsData } from "./types";
import { layout } from "@/shared/design-tokens/layout";

interface Props extends PostActionsData {
  id: string;
}
export const PostActions = ({ id, liked, likeCount, commentCount }: Props) => {
  return (
    <View style={styles.container}>
      <PostLikeActionButton id={id} active={liked} value={likeCount} />
      <PostCommentActionButton id={id} value={commentCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.footer.paddingTop,
    flexDirection: "row",
    columnGap: 8,
  },
});
