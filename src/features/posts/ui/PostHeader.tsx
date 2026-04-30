import { fontStyles, typography } from "@/shared/theme/typography";
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { Post } from "../api/posts.types";
import { postCardStyles } from "./PostCard/styles";
import { layout } from "@/shared/design-tokens/layout";

interface Props {
  author: Post["author"];
  style?: StyleProp<ViewStyle>;
  subtitle?: string;
}
export const PostHeader = ({ author, style, subtitle }: Props) => {
  return (
    <View style={[postCardStyles.header, style]}>
      <Image
        height={40}
        width={40}
        style={postCardStyles.headerIcon}
        source={{ uri: author?.avatarUrl }}
      />
      <View>
        <Text style={[typography.title, styles.title]}>
          {author?.displayName}
        </Text>
        {subtitle && (
          <Text style={[styles.title, typography.small]}>{subtitle}</Text>
        )}
      </View>
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
