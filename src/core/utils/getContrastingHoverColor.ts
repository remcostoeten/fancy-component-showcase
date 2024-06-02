export function hexToRgb(hex: string): { r: number, g: number, b: number } {
  const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
}

/**
 * Converts an RGB color back to hex format.
 * @param rgb The RGB color object.
 * @returns A hex color string.
 */
export function rgbToHex(rgb: { r: number, g: number, b: number }): string {
  return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
}

/**
 * Lightens an RGB color by a given percentage.
 * @param color The original RGB color.
 * @param percent The percentage by which to lighten the color.
 * @returns The lightened RGB color.
 */
export function lightenColor(color: { r: number, g: number, b: number }, percent: number): { r: number, g: number, b: number } {
  return {
    r: Math.min(255, color.r + (255 - color.r) * percent / 100),
    g: Math.min(255, color.g + (255 - color.g) * percent / 100),
    b: Math.min(255, color.b + (255 - color.b) * percent / 100),
  };
}

/**
 * Darkens an RGB color by a given percentage.
 * @param color The original RGB color.
 * @param percent The percentage by which to darken the color.
 * @returns The darkened RGB color.
 */
export function darkenColor(color: { r: number, g: number, b: number }, percent: number): { r: number, g: number, b: number } {
  return {
    r: Math.max(0, color.r - color.r * percent / 100),
    g: Math.max(0, color.g - color.g * percent / 100),
    b: Math.max(0, color.b - color.b * percent / 100),
  };
}

/**
 * Calculates the luminance of an RGB color.
 * @param color The RGB color object.
 * @returns The luminance value.
 */
export function calculateLuminance(color: { r: number, g: number, b: number }): number {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
}

/**
 * Generates a contrasting hover color based on the background color.
 * @param bgColor The background color in hex format.
 * @returns A contrasting hover color in hex format.
 */
export function getContrastingHoverColor(bgColor: string): string {
  const rgbBgColor = hexToRgb(bgColor);
  const luminance = calculateLuminance(rgbBgColor);

  let hoverColor;
  if (luminance > 128) {
    hoverColor = lightenColor(rgbBgColor, 20); // Adjust percentage for desired contrast
  } else {
    hoverColor = darkenColor(rgbBgColor, 20); // Adjust percentage for desired contrast
  }

  return rgbToHex(hoverColor);
}

/**
 * Converts a hex color to RGB format.
 * @param hex The hex color string.
 * @returns An object representing the RGB color.
 */
