import { baseColors } from "@/shared/design-tokens/colors";
import { fontStyles, typography } from "@/shared/theme/typography";
import { StyleSheet, Text, View } from "react-native";
import { PostOverlayIcon } from "./PostOverlayIcon";
import { spacing } from "@/shared/design-tokens/spacing";
import { Button } from "@/shared/ui/button/Button";

export const PostOverlay = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.overlayCenter}>
        <PostOverlayIcon />
        <Text style={[typography.body, styles.overlayText]}>
          {"Контент скрыт пользователем.\nДоступ откроется после доната"}
        </Text>
        <Button text="Отправить донат" style={styles.overlayButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlayCenter: { alignItems: "center" },
  overlayText: {
    color: baseColors.white,
    ...fontStyles.manrope_600semibold,
    marginTop: spacing.s,
    marginBottom: spacing.m + 1,
  },
  overlayButton: {
    width: "60%",
  },
});
