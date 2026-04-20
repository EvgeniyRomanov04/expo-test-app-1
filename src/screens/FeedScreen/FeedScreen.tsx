import { Posts, Post as PostType } from "@/features/posts/api/posts.types";
import { postsStore } from "@/features/posts/model/postsStore";
import { usePosts } from "@/features/posts/model/usePosts";
import { Post } from "@/features/posts/ui/Post";
import { PostSkeleton } from "@/features/posts/ui/PostSkeleton";
import { observer } from "mobx-react-lite";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const FeedScreen = observer(() => {
  const posts = postsStore.posts;
  const { top, bottom } = useSafeAreaInsets();
  const { refetch, isFetching, isFetched, isRefetching, fetchNextPage } =
    usePosts();

  if (isFetching && (!isFetched || isRefetching)) {
    return <PostSkeleton />;
  }

  const renderItem: ListRenderItem<PostType> = ({ item }) => (
    <Post post={item} />
  );

  const onEndReached = () => {
    if (!postsStore.hasMore) return;
    fetchNextPage();
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={{ paddingTop: 16 + top }}
      contentContainerStyle={[styles.content, { paddingBottom: 16 + bottom }]}
      onEndReachedThreshold={0.5}
      onEndReached={onEndReached}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    />
  );
});

const styles = StyleSheet.create({
  content: {
    rowGap: 16,
  },
});

const keyExtractor = (item: NonNullable<Posts>[number]) => item.id!;
