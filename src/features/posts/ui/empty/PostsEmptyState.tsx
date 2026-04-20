import { layout } from "@/shared/design-tokens/layout";
import { spacing } from "@/shared/design-tokens/spacing";
import { typography } from "@/shared/theme/typography";
import { Button } from "@/shared/ui/button/Button";
import { useQueryClient } from "@tanstack/react-query";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const PostsEmptyState = () => {
  const queryClient = useQueryClient();

  const refetch = () => {
    queryClient.fetchQuery({ queryKey: ["infinityPosts"] });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/shared/assets/images/empty/empty-image.png")}
      />
      <Text style={[typography.title, styles.title]}>
        Не удалось загрузить публикации
      </Text>
      <Button text="Повторить" onPress={refetch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: layout.screen.paddingHorizontal,
  },
  image: {
    height: layout.empty.image.size,
    width: layout.empty.image.size,
    alignSelf: "center",
  },
  title: {
    alignSelf: "center",
    textAlign: "center",
    marginVertical: spacing.l,
  },
});
