import { Pressable, StyleSheet, Text } from "react-native";
import { PostActionButtonProps } from "./types";
import { fontStyles } from "@/shared/theme/typography";
import * as PostIcons from "./icons";
import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";

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
      <Text style={[styles.text, fontStyles.manrope_700bold, textStyle]}>
        {value}
      </Text>
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
    borderRadius: 18,
    flexDirection: "row",
  },

  text: {
    fontSize: 13,
    lineHeight: 18,
    textAlignVertical: "center",
    color: colors.text.primary,
  },
});
