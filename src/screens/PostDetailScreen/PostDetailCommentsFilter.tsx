import { colors } from "@/shared/design-tokens/colors";
import { layout } from "@/shared/design-tokens/layout";
import { spacing } from "@/shared/design-tokens/spacing";
import { fontStyles, typography } from "@/shared/theme/typography";
import { ButtonLink } from "@/shared/ui/button/ButtonLink";
import { pluralize } from "@/shared/utils/pluralize";
import { StyleSheet, Text, View } from "react-native";

type CommentFilterType = "new" | "old";

interface Props {
  count: number;
  onChange: (type: CommentFilterType) => void;
}
export const PostDetailCommentsFilter = ({ count, onChange }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={[typography.body, fontStyles.manrope_600semibold, styles.text]}
      >
        {pluralize(count, {
          one: "комментарий",
          few: "комментария",
          many: "комментариев",
        })}
      </Text>
      <ButtonLink text="Сначала новые" onPress={() => onChange("new")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.card.paddingHorizontal,
    backgroundColor: colors.background.card,

    paddingTop: spacing.xs,
    paddingBottom: spacing.s,

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: colors.text.tertiary,
  },
});
