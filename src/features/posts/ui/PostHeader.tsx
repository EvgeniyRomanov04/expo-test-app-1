import { fontStyles, typography } from "@/shared/theme/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../api/posts.types";
import { postCardStyles } from "./PostCard/styles";
import { layout } from "@/shared/design-tokens/layout";

interface Props {
  author: Post["author"];
}
export const PostHeader = ({ author }: Props) => {
  return (
    <View style={postCardStyles.header}>
      <Image
        height={40}
        width={40}
        style={postCardStyles.headerIcon}
        source={{ uri: author?.avatarUrl }}
      />
      <Text style={[typography.title, styles.title]}>
        {author?.displayName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: layout.header.marginLeft,
    fontSize: 15,
    lineHeight: 20,
  },
});
