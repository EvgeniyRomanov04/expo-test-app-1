import { View } from "react-native";
import { Comment } from "../../types";
import { commentStyles } from "./styles";
import { PostHeader } from "@/features/posts/ui/PostHeader";
import { PostDetailCommentAction } from "./PostDetailCommentAction";

interface Props {
  comment: Comment;
}
export const PostDetailComment = ({ comment }: Props) => {
  if (!comment) return;
  return (
    <View style={commentStyles.container}>
      <PostHeader
        author={comment.author}
        subtitle={comment.text}
        style={commentStyles.header}
      />
      <PostDetailCommentAction liked={true} count={2} />
    </View>
  );
};
