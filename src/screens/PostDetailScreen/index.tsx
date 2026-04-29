import { RootParamList } from "@/app/navigation/root/types";
import { Post } from "@/features/posts/ui/Post";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PostDetailCommentsFilter } from "./PostDetailCommentsFilter";
import { useQuery } from "@tanstack/react-query";
import { postsApi } from "@/features/posts/api/postsApi";
import { PostSkeleton } from "@/features/posts/ui/skeleton/PostSkeleton";

export const PostDetailScreen = ({
  route: {
    params: { focus, id },
  },
}: NativeStackScreenProps<RootParamList, "PostDetail">) => {
  const { top } = useSafeAreaInsets();
  const { data: post, isFetching } = useQuery({
    queryKey: ["post/detail"],
    queryFn: () => postsApi.getPost(id),
  });

  if (isFetching || !post) return <PostSkeleton />;

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View>
          <Post post={post} />
          <PostDetailCommentsFilter
            count={post.commentsCount!}
            onChange={() => {}}
          />
        </View>
      }
      contentContainerStyle={[styles.container, { paddingTop: top }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
