import { baseColors } from "./baseColors";

export const colors = {
  background: {
    app: baseColors.gray50,
    card: baseColors.white,
    surface: baseColors.gray100,
    pressed: baseColors.gray200,
  },

  text: {
    primary: baseColors.gray700,
    secondary: baseColors.gray400,
    disabled: baseColors.gray400,
    tertiary: baseColors.gray75,
  },

  icon: {
    primary: baseColors.gray700,
    disabled: baseColors.gray400,
  },

  border: {
    default: baseColors.gray800,
  },

  action: {
    like: {
      activeBackground: baseColors.pink200,
      activeSubtle: baseColors.pink50,

      primary: baseColors.pink500,
      pressed: baseColors.pink600,
    },
  },

  skeleton: {
    background: {
      surface: "rgba(238, 239, 241, 0.8)",
    },
  },

  button: {
    background: {
      primary: baseColors.purple400,
      hover: baseColors.purple500,
      disabled: baseColors.purple50,
    },
    text: {
      primary: baseColors.white,
      hover: baseColors.purple100,
      loading: baseColors.purple75,
      disabled: baseColors.white,
    },
  },
  overlay: {
    text: {
      primary: baseColors.white,
    },
  },
};
