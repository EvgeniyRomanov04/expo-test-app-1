import { StyleSheet } from "react-native";
import Skeleton from "react-native-reanimated-skeleton";
import { commentStyles } from "../ui/PostDetailComment/styles";
import { postSkeletonStyles } from "@/features/posts/ui/PostCard/styles";
export const CommentsSkeleton = () => {
  return <Skeleton isLoading layout={[comment, comment, comment]} />;
};

const styles = StyleSheet.create({
  container: commentStyles.container,
  icon: postSkeletonStyles.headerIcon,
  title: postSkeletonStyles.headerTitle,
});

const comment = { ...styles.container, children: [styles.icon, styles.title] };
