import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx';
import { ThemeProvider, useTheme } from './theme/ThemeContext.jsx';
import { buildTheme } from './theme/muiTheme.jsx';
import { cacheRtl, cacheLtr } from './theme/emotionCache.jsx';

function MuiShell({ children }) {
  const { theme: mode } = useTheme();
  const { dir } = useLanguage();
  const muiTheme = React.useMemo(() => buildTheme(mode, dir), [mode, dir]);
  const cache = dir === 'rtl' ? cacheRtl : cacheLtr;

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <MuiShell>
            <App />
          </MuiShell>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
