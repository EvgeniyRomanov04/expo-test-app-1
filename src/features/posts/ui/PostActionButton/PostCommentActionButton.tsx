import { StyleSheet } from "react-native";
import { PostActionButton } from "./PostActionButton";
import { PostActionButtonProps } from "./types";
import { disabledStyles } from "./styles";
import { colors } from "@/shared/design-tokens/colors";
import postsStore from "../../model/postsStore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@/app/navigation/root/types";

export const PostCommentActionButton = ({
  id,
  value = "0",
  disabled,
}: PostActionButtonProps & { id: string }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const target = postsStore.posts!.find((post) => post.id === id)!;
  return (
    <PostActionButton
      icon="PostCommentIcon"
      value={value}
      style={({ pressed }) => [
        pressed && styles.pressed,
        disabled && disabledStyles.container,
      ]}
      textStyle={disabled && disabledStyles.text}
      iconProps={disabled ? { mainColor: colors.icon.disabled } : undefined}
      onPress={() => {
        const state = navigation.getState();
        const lastRoute = state.routes[state.routes.length - 1];
        const postDetailOpened = lastRoute.name === "PostDetail";
        if (postDetailOpened) {
          navigation.setParams({ ...lastRoute, focus: true });
          return;
        }
        navigation.navigate("PostDetail", target);
      }}
    />
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: colors.background.pressed,
  },
});
