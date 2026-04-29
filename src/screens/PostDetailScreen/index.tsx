import { RootParamList } from "@/app/navigation/root/types";
import { Post } from "@/features/posts/ui/Post";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PostDetailScreen = ({
  route: { params },
}: NativeStackScreenProps<RootParamList, "PostDetail">) => {
  const { top } = useSafeAreaInsets();

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={<Post post={params} />}
      contentContainerStyle={[styles.container, { paddingTop: top }]}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
