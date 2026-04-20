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
  },

  icon: {
    primary: baseColors.gray700,
    disabled: baseColors.gray400,
  },

  border: {
    default: baseColors.gray100,
  },

  action: {
    like: {
      activeBackground: baseColors.pink200,
      activeSubtle: baseColors.pink50,

      primary: baseColors.pink500,
      pressed: baseColors.pink600,
    },
  },
};
