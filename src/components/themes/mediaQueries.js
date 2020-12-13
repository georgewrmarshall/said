export const screenSize = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 996,
  xl: 1280,
  xxl: 1500,
  xxxl: 1920,
};

export const minWidth = {
  xs: `(min-width: ${screenSize.xs}px)`,
  sm: `(min-width: ${screenSize.sm}px)`,
  md: `(min-width: ${screenSize.md}px)`,
  lg: `(min-width: ${screenSize.lg}px)`,
  xl: `(min-width: ${screenSize.xl}px)`,
  xxl: `(min-width: ${screenSize.xxl}px)`,
  xxxl: `(min-width: ${screenSize.xxl}px)`,
};

export const maxWidth = {
  xs: `(max-width: ${screenSize.xs - 1}px)`,
  sm: `(max-width: ${screenSize.sm - 1}px)`,
  md: `(max-width: ${screenSize.md - 1}px)`,
  lg: `(max-width: ${screenSize.lg - 1}px)`,
  xl: `(max-width: ${screenSize.xl - 1}px)`,
  xxl: `(max-width: ${screenSize.xxl - 1}px)`,
  xxxl: `(max-width: ${screenSize.xxl - 1}px)`,
};
