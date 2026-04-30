import { Post } from "@/features/posts/ui/Post";
import { View } from "react-native";
import { PostDetailCommentsFilter } from "./PostDetailCommentsFilter";
import { postsApi } from "@/features/posts/api/postsApi";
import { useQuery } from "@tanstack/react-query";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PostSkeleton } from "@/features/posts/ui/skeleton/PostSkeleton";
import { RootParamList } from "@/app/navigation/root/types";

export const PostDetailHeaderComponent = () => {
  const param = useRoute<RouteProp<RootParamList, "PostDetail">>().params;
  const { data: post, isFetching } = useQuery({
    queryKey: ["post/detail"],
    queryFn: () => postsApi.getPost(param.id),
  });

  if (isFetching || !post) return <PostSkeleton />;

  return (
    <View>
      <Post post={post} />
      <PostDetailCommentsFilter
        count={post.commentsCount!}
        onChange={() => {}}
      />
    </View>
  );
};
