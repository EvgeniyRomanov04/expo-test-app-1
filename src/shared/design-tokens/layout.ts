import { spacing } from "./spacing";

export const layout = {
  screen: {
    paddingTop: spacing.l,
    paddingBottom: spacing.l,
    paddingHorizontal: spacing.l,
  },

  header: {
    marginLeft: 12,
  },

  card: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.m,
    paddingBottom: spacing.l,
  },

  list: {
    gap: spacing.l,
    insetBottom: spacing.l,
  },

  button: {
    paddingVertical: spacing.s - 2,
    paddingLeft: spacing.s - 2,
    paddingRight: spacing.m,
    gap: spacing.xs,
  },

  footer: {
    paddingTop: spacing.l,
    paddingHorizontal: spacing.l,
    paddingBottom: spacing.m,
  },

  empty: {
    image: {
      size: 112,
    },
  },
};
