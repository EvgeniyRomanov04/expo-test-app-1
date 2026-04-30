import { RootParamList } from "@/app/navigation/root/types";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PostDetailHeaderComponent } from "../../features/detail/ui/PostDetailHeaderComponent";
import { useInfiniteQuery } from "@tanstack/react-query";
import { postsApi } from "@/features/posts/api/postsApi";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Comment } from "@/features/detail/types";
import { PostDetailComment } from "@/features/detail/ui/PostDetailComment";
import { CommentsSkeleton } from "@/features/detail/sekeleton/CommentsSkeleton";
import { PostDetailCommentInput } from "@/features/detail/ui/PostDetailCommentInput";
import websocket from "@/features/detail/model/websocket";

export const PostDetailScreen = ({
  route: {
    params: { id },
  },
}: NativeStackScreenProps<RootParamList, "PostDetail">) => {
  const { top } = useSafeAreaInsets();
  const { data, isFetching, isFetched, fetchNextPage } = useInfiniteQuery({
    queryKey: ["infinityPost/detail/comments", id],
    initialPageParam: "",
    //нет фильтрации по дате создания
    queryFn: ({ pageParam }) => postsApi.getPostComments(id, pageParam),
    getNextPageParam: (lastPage) =>
      lastPage?.hasMore ? lastPage.nextCursor : undefined,
    gcTime: 0,
    staleTime: 0,
  });

  const [tempComments, setTempComments] = useState<Comment[]>([]);
  const comments = useMemo(
    () =>
      data
        ? [...tempComments, ...data.pages.flatMap((page) => page?.comments!)]
        : [],
    [data?.pages, tempComments]
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

  useEffect(() => {
    const sub = websocket.emitter.addListener("comment_added", (event) => {
      setTempComments((prev) => [event.comment, ...prev]);
    });
    return () => {
      sub.remove();
    };
  }, []);

  return (
    <>
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
      <PostDetailCommentInput />
    </>
  );
};

const keyExtractor = (item: Comment) => String(item.id);

const styles = StyleSheet.create({
  container: {},
});
