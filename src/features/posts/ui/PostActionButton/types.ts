import { PressableProps, StyleProp, TextStyle } from "react-native";
import * as PostIcons from "./icons";
import { PostActionButtonIconProps } from "./icons/types";
import React from "react";

type PostIconsKeys = keyof typeof PostIcons;

export interface PostActionButtonProps extends PressableProps {
  value?: number;
  active?: boolean;
  icon?: PostIconsKeys | React.JSX.Element;
  iconProps?: PostActionButtonIconProps;
  textStyle?: StyleProp<TextStyle>;
}
