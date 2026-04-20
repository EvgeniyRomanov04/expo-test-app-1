import { Pressable, StyleSheet, Text } from "react-native";
import { PostActionButtonProps } from "./types";
import { fontStyles } from "@/shared/theme/typography";
import * as PostIcons from "./icons";
import { colors } from "@/shared/design-tokens/colors";

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
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 12,
    backgroundColor: colors.background.surface,
    borderRadius: 18,

    flexDirection: "row",
    columnGap: 4,
  },

  text: {
    fontSize: 13,
    lineHeight: 18,
    textAlignVertical: "center",
    color: colors.text.primary,
  },
});
