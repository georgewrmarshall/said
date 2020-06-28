import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';
import { type } from '../type';

export const buttonBase = {
  fontFamily: type.fontFamilyNav,
  fontSize: '16px',
};

export const buttonPrimary = {
  backgroundColor: lightenDarkenColor(colorsTheme.primary, -80),
  backgroundColorHover: lightenDarkenColor(colorsTheme.primary, -100),
  color: colorsTheme.white,
};
