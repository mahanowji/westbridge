import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { getCountry } from '../data/countries.jsx';

export default function VisaCard({ visa, showCountry = true }) {
  const { lang } = useLanguage();
  const country = getCountry(visa.country);

  return (
    <Card
      sx={{
        borderTop: '3px solid',
        borderTopColor: 'eucalyptus.main',
        bgcolor: 'background.paper',
        boxShadow: '0 1px 2px rgba(27,42,40,0.04)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,

        '&:hover': {
          boxShadow: '0 14px 28px -14px rgba(27,42,40,0.22)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, flex: 1, p: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
          <Typography
            sx={{ fontSize: '0.82rem', fontWeight: 700, color: 'eucalyptus.dark', letterSpacing: '0.02em' }}
          >
            {visa.code}
          </Typography>
          {showCountry && country && (
            <Typography
              component="span"
              sx={{ fontSize: '0.82rem', color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <span aria-hidden="true">{country.flag}</span>
              {country.name[lang]}
            </Typography>
          )}
        </Box>
        <Typography variant="h3" sx={{ color: 'heading.main', fontSize: '1.1rem', mt: 0.5 }}>
          {visa.title[lang]}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 0.5, fontSize: '0.9rem', lineHeight: 1.6 }}>{visa.summary[lang]}</Typography>
        <Box
          sx={{
            fontSize: '0.8rem',
            color: 'text.secondary',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 1,
            mt: 'auto',
          }}
        >
          {visa.audience[lang]}
        </Box>
      </CardContent>
    </Card>
  );
}
