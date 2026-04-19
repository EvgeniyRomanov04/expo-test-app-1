import { useMemo, useState } from "react";
import { PostActionButton } from "./PostActionButton";
import { PressableStateCallbackType, StyleSheet } from "react-native";
import { PostActionButtonProps } from "./types";
import { disabledStyles } from "./styles";

export const PostLikeActionButton = ({
  disabled,
  active: initActive,
  value = "0",
}: PostActionButtonProps) => {
  //После добавления апи на лайк, убрать состояние, если нет целей на "временное состояние"
  const [active, setActive] = useState(initActive);
  const disabledStylesValue = active ? disableActiveStyles : disabledStyles;

  const press = () => {
    setActive((prev) => !prev);
  };

  const createStyles = ({ pressed }: PressableStateCallbackType) => [
    pressed && styles.pressed,
    active && activeStyles[pressed ? "pressed" : "default"],
    disabled && disabledStylesValue.container,
  ];

  return (
    <PostActionButton
      icon={active ? "PostActiveLikeIcon" : "PostLikeIcon"}
      value={value}
      onPress={press}
      style={createStyles}
      textStyle={[
        active && activeStyles.defaultText,
        disabled && disabledStylesValue.text,
      ]}
      disabled={disabled}
      iconProps={
        disabled ? { mainColor: active ? "#FFEAF1" : "#B6BEC8" } : undefined
      }
    />
  );
};

const disableActiveStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFBAD2",
  },
  text: {
    color: "#FFEAF1",
  },
});

const activeStyles = StyleSheet.create({
  default: {
    backgroundColor: "#FF2B75",
  },
  pressed: {
    backgroundColor: "#EA276B",
  },
  defaultText: {
    color: "#FFEAF1",
  },
});

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: "#DDDDDD",
  },
});
