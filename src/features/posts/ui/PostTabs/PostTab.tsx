import { Pressable, StyleSheet, Text } from "react-native";
import { TabTypes } from "./types";
import { observer } from "mobx-react-lite";
import postsStore from "../../model/postsStore";
import { colors } from "@/shared/design-tokens/colors";
import { radius } from "@/shared/design-tokens/radius";
import { fontStyles, typography } from "@/shared/theme/typography";

const tabTextMap: Record<NonNullable<TabTypes>, string> = {
  all: "Все",
  free: "Бесплатные",
  paid: "Платные",
};

interface Props {
  type: NonNullable<TabTypes>;
}

export const PostTab = observer(({ type }: Props) => {
  const isActiveTab = (postsStore.tab || "all") === type;

  const onPress = () => {
    postsStore.setTab(type);
  };

  return (
    <Pressable
      style={[styles.container, isActiveTab && styles.active]}
      onPress={onPress}
    >
      <Text
        style={[
          typography.caption,
          styles.text,
          isActiveTab && styles.activeText,
        ]}
      >
        {tabTextMap[type]}
      </Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: radius.l,
  },
  text: {
    paddingVertical: 10,
    ...fontStyles.manrope_500medium,
    color: colors.text.primary,
  },
  active: {
    backgroundColor: colors.button.background.primary,
  },
  activeText: {
    color: colors.button.text.primary,
  },
});
