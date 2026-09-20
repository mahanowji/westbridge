import { createTheme } from '@mui/material/styles';

const tokens = {
  light: {
    ink: '#1b2a28',
    heading: '#1b2a28',
    paper: '#efede6',
    surface: '#ffffff',
    eucalyptus: '#4b6358',
    eucalyptusDark: '#364a41',
    brass: '#a9824a',
    brassDark: '#8c6b3c',
    text: '#2b322f',
    textMuted: '#5c655f',
    line: '#d8d3c6',
    lineStrong: '#c3bdac',
    error: '#a13c3c',
    btnPrimaryBg: '#1b2a28',
    btnPrimaryBgHover: '#364a41',
    btnPrimaryText: '#efede6',
    lowBg: '#eef2ef',
    lowText: '#3c5a4d',
    medBg: '#f6efe1',
    medText: '#7a5a2a',
    highBg: '#f5e9e5',
    highText: '#8a4331',
  },
  dark: {
    ink: '#1b2a28',
    heading: '#f2efe8',
    paper: '#1b1917',
    surface: '#242220',
    eucalyptus: '#7ea08f',
    eucalyptusDark: '#9dc0af',
    brass: '#d3a86a',
    brassDark: '#e3bd85',
    text: '#d9d4c9',
    textMuted: '#a39c8d',
    line: '#37342e',
    lineStrong: '#49453d',
    error: '#e08585',
    btnPrimaryBg: '#d3a86a',
    btnPrimaryBgHover: '#e3bd85',
    btnPrimaryText: '#1b1917',
    lowBg: '#20302a',
    lowText: '#9dc0af',
    medBg: '#332a1c',
    medText: '#e3bd85',
    highBg: '#3a2422',
    highText: '#e08585',
  },
};

export function getDesignTokens(mode) {
  return tokens[mode] || tokens.light;
}

export function buildTheme(mode, direction) {
  const t = getDesignTokens(mode);

  return createTheme({
    direction,
    palette: {
      mode,
      background: {
        default: t.paper,
        paper: t.surface,
      },
      text: {
        primary: t.text,
        secondary: t.textMuted,
      },
      divider: t.line,
      primary: {
        main: t.btnPrimaryBg,
        contrastText: t.btnPrimaryText,
      },
      secondary: {
        main: t.brass,
        dark: t.brassDark,
        contrastText: mode === 'light' ? '#ffffff' : '#1b1917',
      },
      error: {
        main: t.error,
      },
      ink: { main: t.ink },
      heading: { main: t.heading },
      eucalyptus: { main: t.eucalyptus, dark: t.eucalyptusDark },
      brass: { main: t.brass, dark: t.brassDark },
      lineStrong: { main: t.lineStrong },
      complexity: {
        low: { bg: t.lowBg, text: t.lowText },
        medium: { bg: t.medBg, text: t.medText },
        high: { bg: t.highBg, text: t.highText },
      },
    },
    shape: {
      borderRadius: 6,
    },
    typography: {
      fontFamily: "'Vazirmatn', 'Segoe UI', Tahoma, sans-serif",
      h1: { fontWeight: 700, fontSize: 'clamp(2.4rem, 2rem + 2vw, 3.4rem)', lineHeight: 1.3 },
      h2: { fontWeight: 700, fontSize: 'clamp(1.5rem, 1.4rem + 0.5vw, 1.75rem)', lineHeight: 1.3 },
      h3: { fontWeight: 700, fontSize: 'clamp(1.2rem, 1.15rem + 0.25vw, 1.32rem)', lineHeight: 1.3 },
      body1: { fontSize: 'clamp(1rem, 0.97rem + 0.15vw, 1.06rem)', lineHeight: 1.7 },
      body2: { fontSize: 'clamp(0.82rem, 0.8rem + 0.1vw, 0.88rem)', lineHeight: 1.7 },
      button: { fontWeight: 600, textTransform: 'none' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            paddingInline: '1.6rem',
            paddingBlock: '0.85rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: 'none',
            backgroundImage: 'none',
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  });
}
