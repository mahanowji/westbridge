import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useTheme } from '../theme/ThemeContext.jsx';
import BrandMark from './BrandMark.jsx';

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/visas', label: t('nav.visas') },
    { to: '/destinations', label: t('nav.destinations') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/about', label: t('nav.about') },
  ];

  const closeMenu = () => setOpen(false);

  const navLinkSx = (isActive) => ({
    color: isActive ? 'heading.main' : 'text.primary',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.88rem',
    textDecoration: 'none',
    display: 'inline-block',
    borderBottom: '1px solid',
    borderColor: isActive ? 'brass.main' : 'transparent',
    pb: 0.4,
  });

  const utilityButtons = (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton
        onClick={toggleTheme}
        size="small"
        aria-label="toggle theme"
        title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        sx={{ border: '1px solid', borderColor: 'lineStrong.main', color: 'heading.main' }}
      >
        {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
      </IconButton>
      <Button
        onClick={toggleLang}
        variant="outlined"
        size="small"
        sx={{ borderColor: 'lineStrong.main', color: 'text.primary', fontSize: '0.82rem' }}
      >
        {t('common.langSwitch')}
      </Button>
    </Stack>
  );

  const navContent = (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 2.5 : 2.5}
      alignItems={isMobile ? 'flex-start' : 'center'}
      sx={{ width: isMobile ? '100%' : 'auto' }}
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          onClick={closeMenu}
          style={{ textDecoration: 'none' }}
        >
          {({ isActive }) => <Box sx={navLinkSx(isActive)}>{link.label}</Box>}
        </NavLink>
      ))}
      {utilityButtons}
      <Button
        component={NavLink}
        to="/contact"
        onClick={closeMenu}
        variant="contained"
        color="primary"
        size="small"
        fullWidth={isMobile}
        sx={{ fontSize: '0.82rem' }}
      >
        {t('nav.contact')}
      </Button>
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          maxWidth: 1180,
          width: '100%',
          mx: 'auto',
          px: 2,
          py: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          component={NavLink}
          to="/"
          onClick={closeMenu}
          sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
        >
          <BrandMark size={32} />
          <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
            <Typography component="strong" sx={{ color: 'heading.main', fontWeight: 700, fontSize: '1.06rem' }}>
              {t('brand.name')}
            </Typography>
            <Typography component="small" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
              {t('brand.tagline')}
            </Typography>
          </Box>
        </Box>

        {isMobile ? (
          <>
            <IconButton onClick={() => setOpen(true)} aria-label="menu" sx={{ color: 'heading.main' }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={closeMenu}
              slotProps={{
                paper: { sx: { bgcolor: 'background.default', p: 3 } },
              }}
            >
              <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
                <IconButton onClick={closeMenu} aria-label="close menu" sx={{ color: 'heading.main' }}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              {navContent}
            </Drawer>
          </>
        ) : (
          navContent
        )}
      </Toolbar>
    </AppBar>
  );
}
