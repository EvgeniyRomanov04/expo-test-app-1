import { Post } from "@/features/posts/ui/Post";
import { FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const FeedScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderItem = () => {
    return <Post />;
  };

  return (
    <FlatList
      data={[0, 0, 0, 0, 0, 0, 0]}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={[styles.container, { paddingTop: 16 + top }]}
      contentContainerStyle={styles.content}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F8FD",
  },
  content: {
    rowGap: 16,
  },
});

const keyExtractor = (item: number) => item.toString();
