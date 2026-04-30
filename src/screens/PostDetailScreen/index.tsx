import { RootParamList } from "@/app/navigation/root/types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PostDetailHeaderComponent } from "../../features/detail/ui/PostDetailHeaderComponent";
import { useInfiniteQuery } from "@tanstack/react-query";
import { postsApi } from "@/features/posts/api/postsApi";
import { useCallback, useMemo } from "react";
import { Comment } from "@/features/detail/types";
import { PostDetailComment } from "@/features/detail/ui/PostDetailComment";
import { CommentsSkeleton } from "@/features/detail/sekeleton/CommentsSkeleton";

export const PostDetailScreen = ({
  route: {
    params: { id, focus },
  },
}: NativeStackScreenProps<RootParamList, "PostDetail">) => {
  const { top } = useSafeAreaInsets();
  const { data, isFetching, isFetched, fetchNextPage } = useInfiniteQuery({
    queryKey: ["infinityPost/detail/comments", id],
    initialPageParam: "",
    queryFn: ({ pageParam }) => postsApi.getPostComments(id, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage?.hasMore ? lastPage.nextCursor : undefined,
  });

  const comments = useMemo(
    () => (data ? data.pages.flatMap((page) => page?.comments!) : []),
    [data?.pages]
  );

  const renderItem: ListRenderItem<Comment> = useCallback(({ item }) => {
    return <PostDetailComment comment={item} />;
  }, []);

  const onEndReached = () => {
    if (!data || isFetching) return;
    const lastPage = data.pages[data.pages.length - 1];
    if (!lastPage?.hasMore) return;
    console.log("handle");
    fetchNextPage();
  };

  return (
    <FlatList
      data={isFetching && !isFetched ? [] : comments}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={PostDetailHeaderComponent}
      ListEmptyComponent={CommentsSkeleton}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      contentContainerStyle={[styles.container, { paddingTop: top }]}
    />
  );
};

const keyExtractor = (item: Comment) => String(item.id);

const styles = StyleSheet.create({
  container: {},
});
