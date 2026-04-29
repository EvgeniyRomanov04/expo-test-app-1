import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { PostActionButtonProps } from "./types";
import { typography } from "@/shared/theme/typography";
import * as PostIcons from "./icons";
import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { radius } from "@/shared/design-tokens/radius";
import AnimatedNumber from "react-native-animated-numbers";

export const PostActionButton = ({
  value,
  icon,
  iconProps,
  style,
  textStyle,
  onPress,
  ...props
}: PostActionButtonProps) => {
  const iconIsElement = React.isValidElement(icon);
  const Icon =
    typeof icon === "string" ? (icon ? PostIcons[icon] : null) : undefined;

  const press = (event: GestureResponderEvent) => {
    onPress?.(event);
  };

  return (
    <Pressable
      style={(pressedState) => [
        styles.button,
        typeof style === "function" ? style(pressedState) : style,
      ]}
      onPress={press}
      {...props}
    >
      {Icon && <Icon {...iconProps} />}
      {iconIsElement && icon}
      <AnimatedNumber
        includeComma
        animateToNumber={Number(value)}
        containerStyle={styles.textContainer}
        fontStyle={[styles.text, typography.caption, textStyle]}
      />
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
  textContainer: {
    alignSelf: "center",
  },
  text: {
    textAlignVertical: "center",
    color: colors.text.primary,
  },
});
