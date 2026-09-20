import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import FAQ from '../components/FAQ.jsx';

export default function FAQPage() {
  const { t } = useLanguage();

  return (
    <Section sx={{ pt: { xs: 5, md: 5 } }} innerSx={{ maxWidth: 960 }}>
      <PageHead title={t('faq.pageTitle')} body={t('faq.pageIntro')} />

      <FAQ showTabs />

      <Box
        sx={{
          mt: 5,
          pt: 4,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h3" sx={{ mb: 0.5 }}>
          {t('faq.stillQuestions')}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 3 }}>{t('faq.stillQuestionsBody')}</Typography>
        <Button component={Link} to="/contact" variant="contained" color="primary" size="large">
          {t('home.ctaButton')}
        </Button>
      </Box>
    </Section>
  );
}
