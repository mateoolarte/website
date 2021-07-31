import theme from "styled-theming";

import { COLORS } from "./constants";

export const backgroundColor = theme("mode", {
  light: COLORS.white,
  dark: COLORS.black,
});

export const mainColor = theme("mode", {
  light: COLORS.black,
  dark: COLORS.white,
});

export const secondaryColor = theme("mode", {
  light: COLORS.grayDark,
  dark: COLORS.lightGray,
});

export const terciaryColor = theme("mode", {
  light: COLORS.white,
  dark: COLORS.white,
});

export const fourtyColor = theme("mode", {
  light: COLORS.grayDark,
  dark: COLORS.white,
});

export const linksColor = theme("mode", {
  light: COLORS.blue,
  dark: COLORS.blueSky,
});

export const linksColorSecondary = theme("mode", {
  light: COLORS.orange,
  dark: COLORS.blueSky,
});

export const linksColorTerciary = theme("mode", {
  light: COLORS.blueSky,
  dark: COLORS.orangeLight,
});

export const shadows = theme("mode", {
  light: COLORS.lightGray,
  dark: COLORS.blueDark,
});
