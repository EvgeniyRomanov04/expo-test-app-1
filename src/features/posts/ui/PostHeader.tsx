import { fontStyles } from "@/shared/theme/typography";
import { Image, StyleSheet, Text, View } from "react-native";

export const PostHeader = () => {
  return (
    <View style={styles.container}>
      <Image height={40} width={40} style={styles.icon} />
      <Text style={[styles.title, fontStyles.manrope_700bold]}>
        Иван Иванович
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    borderRadius: 20,
    backgroundColor: "gray",
  },
  title: {
    marginLeft: 12,
    fontSize: 15,
    lineHeight: 20,
  },
});
