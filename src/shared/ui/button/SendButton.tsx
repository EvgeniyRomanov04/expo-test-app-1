import { SendIcon } from "@/shared/assets/icons/SendIcon";
import { baseColors } from "@/shared/design-tokens/colors";
import { Pressable } from "react-native";

interface Props {
  onPress?: () => void;
  disabled?: boolean;
}
export const SendButton = ({ onPress, disabled }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [disabled && { opacity: 0.4 }]}
    >
      {({ pressed }) => (
        <SendIcon mainColor={pressed ? baseColors.purple700 : undefined} />
      )}
    </Pressable>
  );
};
