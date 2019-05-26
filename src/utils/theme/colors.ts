export const colors = {
  black: '#4c5159',
  blue: '#3d3bee',
  smoke: '#c2c2c2',
  purple: '#744ff4',
  light: '#efefef',
  red: '#E72B37',
  green: '#2C8754',
  navyBlue: '#263271',
};

/**
 * Make a hexadecimal color lighter or darker
 * @param {string} color - hexadecimal color like #ff00ff
 * @param {number} percent - positive number to lighten and negative number to darken
 */
export const shadeColor = (color: string, percent: number): string => {
  let R: number = parseInt(color.substring(1, 3), 16);
  let G: number = parseInt(color.substring(3, 5), 16);
  let B: number = parseInt(color.substring(5, 7), 16);

  R = Math.round((R * (100 + percent)) / 100);
  G = Math.round((G * (100 + percent)) / 100);
  B = Math.round((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR: string =
    R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  const GG: string =
    G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  const BB: string =
    B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};
