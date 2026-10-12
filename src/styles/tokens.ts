// Design tokens — single source of truth for colors and font names

export const colors = {
  // Backgrounds
  pageBg: '#fff0ed',
  cardBg: '#e7d1d1',
  quoteBg: '#f8e7e7',

  // Text
  heading: '#505050',
  headingDark: '#262626',
  subheading: '#646464',
  body: '#737373',
  muted: '#747474',
  dark: '#3d3d3d',
  black: '#212121',

  // Accent / brand
  mauve: '#a38f8b',
  red: '#b23838',

  // Borders
  border: '#a38f8b',
} as const;

export const fonts = {
  display: "'Cormorant Unicase:Bold'",
  mono: "'Cutive Mono:Regular'",
  hand: "'Figma Hand:Regular'",
  body: "'Mulish:Regular'",
  semibold: "'Mulish:SemiBold'",
  bold: "'Mulish:Bold'",
  boldItalic: "'Mulish:Bold Italic'",
  mediumItalic: "'Mulish:Medium Italic'",
  semiboldItalic: "'Mulish:SemiBold Italic'",
  black: "'Mulish:Black'",
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
} as const;
