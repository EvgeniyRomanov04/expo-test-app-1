import { colors } from "@/shared/design-tokens/colors";
import { radius } from "@/shared/design-tokens/radius";
import { spacing } from "@/shared/design-tokens/spacing";
import { fontStyles } from "@/shared/theme/typography";
import { useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { AnimatedLoadIcon } from "../loader/AnimatedLoadIcon";

interface Props {
  text: string;
  loading?: boolean;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
}
export const Button = ({ text, loading, disable, style }: Props) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        disable && styles.disabled,
        style,
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      {loading ? (
        <AnimatedLoadIcon stroke={colors.button.text.loading} />
      ) : (
        <Text
          style={[
            styles.text,
            pressed && styles.pressedText,
            disable && styles.disabledText,
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.s,
    justifyContent: "center",
    backgroundColor: colors.button.background.primary,
    flexDirection: "row",
    borderRadius: radius.l,
  },
  pressed: {
    backgroundColor: colors.button.background.hover,
  },
  disabled: {
    backgroundColor: colors.button.background.disabled,
  },
  pressedText: {
    color: colors.button.text.hover,
  },
  disabledText: {
    color: colors.button.text.disabled,
  },
  text: {
    fontSize: 15,
    lineHeight: 26,
    ...fontStyles.manrope_600semibold,

    color: colors.button.text.primary,
  },
});
