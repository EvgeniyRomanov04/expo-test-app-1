import { typography } from "@/shared/theme/typography";
import { Text, View } from "react-native";
import { PostActions } from "./PostActions";
import { PostActionsData } from "./types";
import { postCardStyles } from "./PostCard/styles";

interface Props extends PostActionsData {
  title: string;
  text: string;
}
export const PostFooter = ({ text, title, ...actionsData }: Props) => {
  return (
    <View style={postCardStyles.footerContainer}>
      <Text style={typography.title}>{text}</Text>
      <Text style={typography.body}>{title}</Text>
      <PostActions {...actionsData} />
    </View>
  );
};
