import { StyleSheet, View } from "react-native";
import { PostHeader } from "./PostHeader";
import { PostMedia } from "./PostMedia";
import { PostFooter } from "./PostFooter";
import { Post as PostType } from "../api/posts.types";
import { colors } from "@/shared/design-tokens/colors";

interface Props {
  post: PostType;
}
export const Post = ({ post }: Props) => {
  return (
    <View style={styles.container}>
      <PostHeader author={post.author} />
      <PostMedia image={post.coverUrl!} tier={post.tier} />
      <PostFooter
        title={post.preview!}
        text={post.title!}
        liked={post.isLiked!}
        likeCount={post.likesCount || 0}
        commentCount={post.commentsCount || 0}
        tier={post.tier}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.background.card,
  },
});
