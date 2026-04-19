import { Image, StyleSheet } from "react-native";

interface Props {
  image: string;
}
export const PostMedia = ({ image }: Props) => {
  return <Image style={styles.image} source={{ uri: image }} />;
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#F5F8FD",
  },
});
