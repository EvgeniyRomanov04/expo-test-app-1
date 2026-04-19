import { fontStyles } from "@/shared/theme/typography";
import { StyleSheet, Text, View } from "react-native";
import { PostActions } from "./PostActions";
import { PostActionsData } from "./post.types";
import { postCardStyles } from "./PostCard/styles";

interface Props extends PostActionsData {
  title: string;
  text: string;
}
export const PostFooter = ({ text, title, ...actionsData }: Props) => {
  return (
    <View style={postCardStyles.footerContainer}>
      <Text style={[styles.title, fontStyles.manrope_700bold]}>{text}</Text>
      <Text style={[styles.text, fontStyles.manrope_500medium]}>{title}</Text>
      <PostActions {...actionsData} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 26,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
});
