import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { countries } from '../data/countries.jsx';
import BrandMark from './BrandMark.jsx';

const footerLinkSx = {
  color: '#b9c2bc',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 0.75,
  fontSize: '0.94rem',
  '&:hover': { color: 'brass.main' },
};

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'ink.main', color: '#cfd6d1', pt: 5 }}>
      <Box
        sx={{
          maxWidth: 1180,
          mx: 'auto',
          px: 2,
          pb: 4,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1.2fr 1fr 1.4fr 1fr' },
          gap: 4,
        }}
      >

        {/* Brand */}
        <Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <BrandMark size={26} />

            <Typography
              component="strong"
              sx={{
                color: '#eef1ec',
                fontSize: '1.2rem',
                fontWeight: 700
              }}
            >
              {t('brand.name')}
            </Typography>

          </Stack>

          <Typography sx={{ color: '#9fada4', mt: 1 }}>
            {t('brand.tagline')}
          </Typography>

        </Box>


        {/* Links */}
        <Stack spacing={1}>

          <Typography sx={{
            color: '#eef1ec',
            fontWeight: 700,
            mb: .3
          }}>
            {t('footer.quickLinks')}
          </Typography>


          <Box component={Link} to="/services" sx={footerLinkSx}>
            {t('nav.services')}
          </Box>

          <Box component={Link} to="/visas" sx={footerLinkSx}>
            {t('nav.visas')}
          </Box>

          <Box component={Link} to="/destinations" sx={footerLinkSx}>
            {t('nav.destinations')}
          </Box>

          <Box component={Link} to="/faq" sx={footerLinkSx}>
            {t('nav.faq')}
          </Box>

          <Box component={Link} to="/blog" sx={footerLinkSx}>
            {t('nav.blog')}
          </Box>

          <Box component={Link} to="/about" sx={footerLinkSx}>
            {t('nav.about')}
          </Box>

        </Stack>



        {/* Destinations */}
        <Stack spacing={1}>

          <Typography
            sx={{
              color: '#eef1ec',
              fontWeight: 700,
              mb: 0.5,
              textAlign: 'center'
            }}
          >
            {t('footer.destinations')}
          </Typography>


          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.4,
              alignItems: 'center'
            }}
          >

            {countries.slice(0, 3).map((country) => (

              <Box
                key={country.id}
                component={Link}
                to={`/visas?country=${country.id}`}
                sx={{
                  color: '#b9c2bc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,

                  '&:hover': {
                    color: 'brass.main'
                  }
                }}
              >
                {country.name[lang]}
              </Box>

            ))}


            <Box
              component={Link}
              to="/visas"
              sx={{
                color: 'brass.main',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                mt: 0.3,

                '&:hover': {
                  color: '#d8c18b'
                }
              }}
            >
              {lang === 'fa' ? 'مشاهده همه' : 'View All'}
            </Box>


          </Box>

        </Stack>




        {/* Contact */}
        <Stack spacing={1}>

          <Typography
            sx={{
              color: '#eef1ec',
              fontWeight: 700,
              mb: .3
            }}
          >
            {t('footer.contactUs')}
          </Typography>


          <Box
            component="a"
            href="tel:09308719961"
            sx={footerLinkSx}
          >
            <Phone size={15} />
            09308719961
          </Box>



          <Box
            component="a"
            href="mailto:info@westbridge-immigration.com"
            sx={{
              ...footerLinkSx,
              whiteSpace: 'nowrap'
            }}
          >
            <Mail size={15} />
            info@westbridge-immigration.com
          </Box>





        </Stack>


      </Box>



      <Box
        sx={{
          borderTop: '1px solid #2f3f3a',
          px: 2,
          py: 3
        }}
      >

        <Typography
          sx={{
            color: '#8b978f',
            fontSize: '0.82rem',
            textAlign: 'center',
            maxWidth: 1180,
            mx: 'auto',
            mb: .5
          }}
        >
          {t('footer.disclaimer')}
        </Typography>


        <Typography
          sx={{
            color: '#8b978f',
            fontSize: '0.82rem',
            textAlign: 'center',
            maxWidth: 1180,
            mx: 'auto'
          }}
        >
          © {year} {t('brand.name')} — {t('footer.rights')}
        </Typography>

      </Box>


    </Box>
  );
}