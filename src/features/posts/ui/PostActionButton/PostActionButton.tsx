import { Pressable, StyleSheet, Text } from "react-native";
import { PostActionButtonProps } from "./types";
import { fontStyles, typography } from "@/shared/theme/typography";
import * as PostIcons from "./icons";
import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { radius } from "@/shared/design-tokens/radius";

export const PostActionButton = ({
  value,
  icon,
  iconProps,
  style,
  textStyle,
  ...props
}: PostActionButtonProps) => {
  const Icon = icon ? PostIcons[icon] : null;
  return (
    <Pressable
      style={(pressedState) => [
        styles.button,
        typeof style === "function" ? style(pressedState) : style,
      ]}
      {...props}
    >
      {Icon && <Icon {...iconProps} />}
      <Text style={[styles.text, typography.caption, textStyle]}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: layout.button.paddingVertical,
    paddingLeft: layout.button.paddingLeft,
    paddingRight: layout.button.paddingRight,
    columnGap: layout.button.gap,

    backgroundColor: colors.background.surface,
    borderRadius: radius.xl - 2,
    flexDirection: "row",
  },

  text: {
    textAlignVertical: "center",
    color: colors.text.primary,
  },
});
