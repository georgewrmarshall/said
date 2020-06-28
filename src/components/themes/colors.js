export const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
};

/**
 * Function similar to the sass lighten darken functions
 * provide a colour value for the first argument
 * provide a number for the second value.
 * - negative to darken
 * - positive to lighten
 * e.g let newColor = lightenDarkenColor("#F06D06", 20);
 * e.g let newColor = lightenDarkenColor("#F06D06", -20);
 */
export const lightenDarkenColor = (col, amt) => {
  let usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export const colors = {
  black: '#000',
  white: '#fff',
  grayLight: '#8A8888',
  blueLightest: '#D9E6F3',
  blueLight: '#B6C8DB',
  blueDark: '#6885A4'
};
