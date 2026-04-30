import { useEffect, useState } from "react";
import { PostActionButton } from "./PostActionButton";
import { PressableStateCallbackType, StyleSheet } from "react-native";
import { PostActionButtonProps } from "./types";
import { disabledStyles } from "./styles";
import { colors } from "@/shared/design-tokens/colors";
import { impactAsync, ImpactFeedbackStyle } from "expo-haptics";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PostActiveLikeIcon, PostLikeIcon } from "./icons";
import websocket from "@/features/detail/model/websocket";
import postsStore from "../../model/postsStore";
import { observer } from "mobx-react-lite";

export const PostLikeActionButton = observer(
  ({ id, disabled }: PostActionButtonProps & { id: string }) => {
    const post = postsStore.getPostById(id);
    const active = post?.isLiked;

    const animatedScale = useSharedValue(1);

    const disabledStylesValue = active ? disableActiveStyles : disabledStyles;

    const press = async () => {
      impactAsync(ImpactFeedbackStyle.Light);
      animatedScale.value = withTiming(1.2, undefined, (finished) => {
        if (!finished) return;
        animatedScale.value = withTiming(1);
      });
      postsStore.toogleLike(id);
    };

    const animatedIconStyles = useAnimatedStyle(() => ({
      transform: [{ scale: animatedScale.value }],
    }));

    const createStyles = ({ pressed }: PressableStateCallbackType) => [
      pressed && styles.pressed,
      active && activeStyles[pressed ? "pressed" : "default"],
      disabled && disabledStylesValue.container,
    ];

    return (
      <PostActionButton
        icon={
          <Animated.View style={animatedIconStyles}>
            {active ? <PostActiveLikeIcon /> : <PostLikeIcon />}
          </Animated.View>
        }
        value={post?.likesCount}
        onPress={press}
        style={createStyles}
        textStyle={[
          active && activeStyles.defaultText,
          disabled && disabledStylesValue.text,
        ]}
        disabled={disabled}
        iconProps={
          disabled
            ? {
                mainColor: active
                  ? colors.action.like.activeSubtle
                  : colors.icon.disabled,
              }
            : undefined
        }
      />
    );
  }
);

const disableActiveStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.action.like.activeBackground,
  },
  text: {
    color: colors.action.like.activeSubtle,
  },
});

const activeStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.action.like.primary,
  },
  pressed: {
    backgroundColor: colors.action.like.pressed,
  },
  defaultText: {
    color: colors.action.like.activeSubtle,
  },
});

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: colors.background.pressed,
  },
});
