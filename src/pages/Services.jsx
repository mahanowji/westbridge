import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import ResponsiveGrid from '../components/ResponsiveGrid.jsx';
import MiniCard from '../components/MiniCard.jsx';
import { services } from '../data/services.jsx';
import { serviceIcons } from '../data/serviceIcons.jsx';

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <Section sx={{ pt: { xs: 5, md: 5 } }}>
      <PageHead title={t('services.pageTitle')} body={t('services.pageIntro')} />

      <ResponsiveGrid columns={2}>
        {services.map((service) => (
          <MiniCard
            key={service.id}
            icon={serviceIcons[service.id]}
            title={service.title[lang]}
            body={service.body[lang]}
          />
        ))}
      </ResponsiveGrid>

      <Box sx={{ mt: 5 }}>
        <Button component={Link} to="/contact" variant="contained" color="primary" size="large">
          {t('home.ctaButton')}
        </Button>
      </Box>
    </Section>
  );
}
