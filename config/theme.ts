export const themeConfig = {
  colors: {
    primary: {
      light: '#3b82f6',
      dark: '#60a5fa',
    },
    secondary: {
      light: '#8b5cf6',
      dark: '#a78bfa',
    },
    accent: {
      light: '#f59e0b',
      dark: '#fbbf24',
    },
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
};

export type ThemeConfig = typeof themeConfig;
