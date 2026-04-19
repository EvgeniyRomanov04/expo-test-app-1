import { Image, StyleSheet, View } from "react-native";
import { PostHeader } from "./PostHeader";
import { PostMedia } from "./PostMedia";
import { PostFooter } from "./PostFooter";

export const Post = () => {
  return (
    <View style={styles.container}>
      <PostHeader />
      <PostMedia />
      <PostFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
});
