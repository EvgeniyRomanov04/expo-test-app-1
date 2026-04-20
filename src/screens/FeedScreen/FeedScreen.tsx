import { Posts, Post as PostType } from "@/features/posts/api/posts.types";
import { postsStore } from "@/features/posts/model/postsStore";
import { usePosts } from "@/features/posts/model/usePosts";
import { PostsEmptyState } from "@/features/posts/ui/empty/PostsEmptyState";
import { Post } from "@/features/posts/ui/Post";
import { PostSkeleton } from "@/features/posts/ui/skeleton/PostSkeleton";
import { layout } from "@/shared/design-tokens/layout";
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

  if (!isFetching && isFetched && posts?.length === 0) {
    return <PostsEmptyState />;
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
      style={{ paddingTop: layout.screen.paddingTop + top }}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: layout.screen.paddingBottom + bottom },
      ]}
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
    rowGap: layout.list.gap,
  },
});

const keyExtractor = (item: NonNullable<Posts>[number]) => item.id!;
