import { colorsTheme } from './colors';
import { lightenDarkenColor } from '../colors';
import { type } from '../type';

export const input = {
  color: lightenDarkenColor(colorsTheme.grayLight, -80),
  fontSize: type.infoSize,
  outlineColor: colorsTheme.primary,
  placeholderColor: colorsTheme.grayLight,
  height: '40px',
};

