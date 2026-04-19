import { Image, StyleSheet } from "react-native";

export const PostMedia = () => {
  return <Image style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "gray",
  },
});
