import { colors } from "@/shared/design-tokens/colors";
import { typography } from "@/shared/theme/typography";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
export const ButtonLink = ({ text, onPress, style, disabled }: Props) => {
  return (
    <Pressable style={style} onPress={onPress}>
      {({ pressed }) => (
        <Text
          style={[
            typography.body,
            styles.link,
            pressed && styles.hover,
            disabled && styles.disabled,
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    color: colors.button.background.primary,
  },
  hover: { color: colors.button.background.hover },
  disabled: {
    color: colors.button.background.disabled,
  },
});
