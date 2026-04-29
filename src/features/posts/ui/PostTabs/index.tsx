import { layout } from "@/shared/design-tokens/layout";
import { StyleSheet, View } from "react-native";
import { Tab } from "./types";
import { PostTab } from "./PostTab";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { radius } from "@/shared/design-tokens/radius";
import { colors } from "@/shared/design-tokens/colors";

const tabs: Tab[] = [
  {
    type: "all",
  },
  {
    type: "free",
  },
  {
    type: "paid",
  },
];

export const PostTabs = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { top }]}>
      {tabs.map((tab, index) => (
        <PostTab type={tab.type} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: layout.screen.paddingTop,
    marginHorizontal: layout.screen.paddingHorizontal,

    flexDirection: "row",
    zIndex: 1,

    borderRadius: radius.l,
    backgroundColor: colors.background.card,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
});
