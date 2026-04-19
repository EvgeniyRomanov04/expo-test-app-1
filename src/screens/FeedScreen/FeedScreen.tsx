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
  const loading = postsStore.loading;
  const { top } = useSafeAreaInsets();
  const { refetch, isRefetching } = usePosts();

  if (loading) {
    return <PostSkeleton />;
  }

  const renderItem: ListRenderItem<PostType> = ({ item }) => (
    <Post post={item} />
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={[styles.container, { paddingTop: 16 + top }]}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FD",
  },
  content: {
    rowGap: 16,
  },
});

const keyExtractor = (item: NonNullable<Posts>[number]) => item.id!;
