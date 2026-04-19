import { StyleSheet, View } from "react-native";
import { PostLikeActionButton } from "./PostActionButton/PostLikeActionButton";
import { PostCommentActionButton } from "./PostActionButton/PostCommentActionButton";

export const PostActions = () => {
  return (
    <View style={styles.container}>
      <PostLikeActionButton value="100" />
      <PostCommentActionButton value="10000" />
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
