import { RootParamList } from "@/app/navigation/root/types";
import { Posts, Post as PostType } from "@/features/posts/api/posts.types";
import postsStore from "@/features/posts/model/postsStore";
import { usePosts } from "@/features/posts/model/usePosts";
import { PostsEmptyState } from "@/features/posts/ui/empty/PostsEmptyState";
import { Post } from "@/features/posts/ui/Post";
import { PostTabs } from "@/features/posts/ui/PostTabs";
import { PostSkeleton } from "@/features/posts/ui/skeleton/PostSkeleton";
import { layout } from "@/shared/design-tokens/layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import {
  FlatList,
  ListRenderItem,
  Pressable,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const FeedScreen = observer(
  ({ navigation }: NativeStackScreenProps<RootParamList, "Feed">) => {
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
      <Pressable
        onPress={() => navigation.navigate("PostDetail", { id: item.id! })}
      >
        <Post post={item} />
      </Pressable>
    );

    const onEndReached = () => {
      if (!postsStore.hasMore) return;
      fetchNextPage();
    };

    return (
      <View>
        <PostTabs />
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
      </View>
    );
  }
);

const styles = StyleSheet.create({
  content: {
    rowGap: layout.list.gap,
  },
});

const keyExtractor = (item: NonNullable<Posts>[number]) => item.id!;
