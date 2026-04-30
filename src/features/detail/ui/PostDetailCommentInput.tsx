import { RootParamList } from "@/app/navigation/root/types";
import { postsApi } from "@/features/posts/api/postsApi";
import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { typography } from "@/shared/theme/typography";
import { SendButton } from "@/shared/ui/button/SendButton";
import { BaseInput } from "@/shared/ui/input/BaseInput";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PostDetailCommentInput = () => {
  const {
    params: { id, focus },
  } = useRoute<RouteProp<RootParamList, "PostDetail">>();
  const { bottom } = useSafeAreaInsets();
  const input = useRef<TextInput>(null);
  const [value, setValue] = useState("");

  const send = async () => {
    const result = await postsApi.postComment(id, value);
    setValue("");
  };

  useEffect(() => {
    if (!focus || !input.current) return;
    input.current.focus();
  }, [focus]);

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: bottom + layout.card.paddingHorizontal },
      ]}
    >
      <BaseInput
        ref={input}
        placeholder="Ваш комментарий"
        style={[typography.body, styles.input]}
        multiline
        textAlignVertical="top"
        maxLength={500}
        returnKeyType="default"
        value={value}
        onChangeText={setValue}
      />
      <View style={styles.iconContainer}>
        <SendButton onPress={send} disabled={!value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: colors.background.card,
    padding: layout.card.paddingHorizontal,
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
});
