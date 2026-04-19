import { PressableProps, StyleProp, TextStyle } from "react-native";
import * as PostIcons from "./icons";
import { PostActionButtonIconProps } from "./icons/types";

type PostIconsKeys = keyof typeof PostIcons;

export interface PostActionButtonProps extends PressableProps {
  value: string;
  active?: boolean;
  icon?: PostIconsKeys;
  iconProps?: PostActionButtonIconProps;
  textStyle?: StyleProp<TextStyle>;
}
