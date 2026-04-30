import { colors } from "@/shared/design-tokens/colors";
import { radius } from "@/shared/design-tokens/radius";
import { spacing } from "@/shared/design-tokens/spacing";
import { forwardRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface BaseInputProps extends TextInputProps {}
export const BaseInput = forwardRef<TextInput | null, BaseInputProps>(
  ({ style, value, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <TextInput
        ref={ref}
        value={value}
        style={[styles.input, isFocused && styles.focus, style]}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.background.surface,
    backgroundColor: colors.background.surface,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m - 2,

    borderRadius: radius.xl,
  },
  focus: {
    backgroundColor: colors.background.card,
  },
});
