// Design tokens aligned with Figma color themes
export const colors = {
  brand: {
    primary: '#018DF0',
    secondary: '#CCCCF5',
    tertiary: '#E7F6FD',
  },
  accents: {
    yellow: '#FFB836',
    green: '#56CDAD',
    red: '#FF6550',
    blue: '#26A4FF',
    purple: '#7B61FF',
  },
  neutrals: {
    900: '#25324B',
    700: '#515B6F',
    500: '#7C8493',
    300: '#A8ADB7',
    200: '#E4E5E7',
    100: '#F9FAFC',
    50: '#F8F8FD',
  },
} as const; // 'as const' makes it read-only

// A handy trick to get nested keys if you ever need them:
export type NestedColorKey = keyof typeof colors.brand | keyof typeof colors.accents;

