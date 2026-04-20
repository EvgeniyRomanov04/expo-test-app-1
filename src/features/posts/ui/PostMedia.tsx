import { colors } from "@/shared/design-tokens/colors";
import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";
import { Post } from "../api/posts.types";
import { PostOverlay } from "./PostOverlay";

interface Props {
  image: string;
  tier: Post["tier"];
}
export const PostMedia = ({ image, tier }: Props) => {
  const isPaid = tier === "paid";
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        blurRadius={(isPaid && Platform.select({ android: 40, ios: 80 })) || 0}
      />
      {isPaid && <PostOverlay />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 1,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.app,
  },
});
