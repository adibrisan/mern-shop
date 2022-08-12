export const Sizes = {
  xs: 375,
  sm: 414,
  md: 767,
  lg: 1024,
  xl: 1280,
  hd: 1440,
  fhd: 1920,
  qhd: 2560,
  uhd: 3840,
};

export const MediaQueries = {
  phone: `only screen and (max-width: ${Sizes.md - 1}px)`,
  phoneSmall: `only screen and (max-width: ${Sizes.xs - 1}px)`,
  phoneMedium: `only screen and (min-width: ${Sizes.xs}px) and (max-width: ${
    Sizes.sm - 1
  }px)`,
  phoneLarge: `only screen and (min-width: ${Sizes.sm}px) and (max-width: ${
    Sizes.md - 1
  }px)`,
  tablet: `only screen and (min-width: ${Sizes.md}px) and (max-width: ${Sizes.xl}px)`,
  tabletSmall: `only screen and (min-width: ${Sizes.md}px) and (max-width: ${
    Sizes.lg - 1
  }px)`,
  tabletLarge: `only screen and (min-width: ${Sizes.lg}px) and (max-width: ${Sizes.xl}px)`,
  touch: `only screen and (max-width: ${Sizes.xl}px)`,
  touchSmall: `only screen and (max-width: ${Sizes.lg - 1}px)`,
  laptop: `only screen and (min-width: ${Sizes.xl + 1}px) and (max-width: ${
    Sizes.hd - 1
  }px)`,
  desktop: `only screen and (min-width: ${Sizes.hd}px)`,
  fhd: `only screen and (min-width: ${Sizes.fhd}px)`,
  qhd: `only screen and (min-width: ${Sizes.qhd}px)`,
};
