import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { countries } from '../data/countries.jsx';

const infoLinkSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': { color: 'eucalyptus.dark', flexShrink: 0 },
  '&:hover': { color: 'eucalyptus.dark' },
};

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <Section sx={{ pt: { xs: 5, md: 5 } }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
          gap: 5,
          alignItems: 'start',
        }}
      >
        <Box>
          <Typography variant="h1" sx={{ fontSize: 'clamp(1.9rem, 1.7rem + 1vw, 2.4rem)', mb: 2 }}>
            {t('contact.pageTitle')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('contact.pageIntro')}</Typography>

          <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography sx={{ fontWeight: 700, color: 'heading.main', mb: 0.3 }}>
              {t('contact.contactInfoTitle')}
            </Typography>
            <Box component="a" href="tel:09308719961" sx={infoLinkSx}>
              <Phone size={16} /> 09308719961
            </Box>
            <Box component="a" href="mailto:info@westbridge-immigration.com" sx={infoLinkSx}>
              <Mail size={16} /> info@westbridge-immigration.com
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, mt: 2, color: 'text.secondary', fontSize: '0.88rem' }}>
              {countries.map((c) => (
                <Box
                  key={c.id}
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    px: 1.5,
                    py: 0.6,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8
                  }}
                >
                  <span>{c.flag}</span> <span>{c.name[lang]}</span>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, gap: 0.2 }}>
              <Box sx={{ ...infoLinkSx, color: 'text.secondary', fontSize: '0.82rem' }}>
                <Clock size={16} /> {t('contact.officeHours')}
              </Box>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>
                <strong>{t('contact.officeHoursValue')}</strong>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <ContactForm />
        </Box>
      </Box>
    </Section>
  );
}
