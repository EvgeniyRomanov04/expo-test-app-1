import { StyleSheet } from "react-native";
import { PostActionButton } from "./PostActionButton";
import { PostActionButtonProps } from "./types";
import { disabledStyles } from "./styles";
import { colors } from "@/shared/design-tokens/colors";

export const PostCommentActionButton = ({
  value = "0",
  disabled,
}: PostActionButtonProps) => {
  return (
    <PostActionButton
      icon="PostCommentIcon"
      value={value}
      style={({ pressed }) => [
        pressed && styles.pressed,
        disabled && disabledStyles.container,
      ]}
      textStyle={disabled && disabledStyles.text}
      iconProps={disabled ? { mainColor: colors.icon.disabled } : undefined}
    />
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: colors.background.pressed,
  },
});
