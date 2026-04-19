import { fontStyles } from "@/shared/theme/typography";
import { StyleSheet, Text, View } from "react-native";
import { PostActions } from "./PostActions";

export const PostFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, fontStyles.manrope_700bold]}>
        Подготовка к лету
      </Text>
      <Text style={[styles.text, fontStyles.manrope_500medium]}>
        Когда вы начинаете бегать по утрам, но чувствуете, что каждый шаг дается
      </Text>
      <PostActions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
  },
  text: {
    fontSize: 15,
    lineHeight: 20,
  },
});
