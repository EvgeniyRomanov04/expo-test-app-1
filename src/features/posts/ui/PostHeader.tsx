import { fontStyles } from "@/shared/theme/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { Post } from "../api/posts.types";
import { postCardStyles } from "./PostCard/styles";

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
      <Text style={[styles.title, fontStyles.manrope_700bold]}>
        {author?.displayName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 12,
    fontSize: 15,
    lineHeight: 20,
  },
});
