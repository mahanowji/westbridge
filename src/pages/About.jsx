import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import ResponsiveGrid from '../components/ResponsiveGrid.jsx';
import MiniCard from '../components/MiniCard.jsx';
import { processSteps } from '../data/services.jsx';

const values = [
  {
    id: 'transparency',
    title: { fa: 'شفافیت و صداقت در ارزیابی', en: 'Transparency at Every Step' },
    body: {
      fa: 'شانس واقعی هر مسیر را صادقانه می‌گوییم و شما را درگیر مسیرهای پرریسک نمی‌کنیم.',
      en: 'We communicate the true odds of each pathway honestly, keeping you away from high-risk ventures.',
    },
  },
  {
    id: 'accuracy',
    title: { fa: 'دقت در مدارک و انطباق قانونی', en: 'Meticulous Legal Documentation' },
    body: {
      fa: 'هر مدرک پیش از سابمیت نهایی چندین نوبت توسط تیم حقوقی بازبینی می‌شود.',
      en: 'Every document is audited multiple times by our legal team prior to formal lodgement.',
    },
  },
  {
    id: 'availability',
    title: { fa: 'پاسخگویی و پیگیری مداوم', en: 'Dedicated Accountability' },
    body: {
      fa: 'یک کارشناس اختصاصی در تمام طول فرآیند پرونده پاسخگوی پیوسته سوالات شماست.',
      en: 'A dedicated case manager stays accessible to address your questions throughout the entire process.',
    },
  },
];

export default function About() {
  const { t, lang } = useLanguage();
  const intro = t('about.pageIntro');
  const paragraphs = typeof intro === 'string' ? intro.split('\n\n') : [intro];

  return (
    <Section sx={{ pt: { xs: 5, md: 5 } }} innerSx={{ maxWidth: 840 }}>
      <PageHead title={t('about.pageTitle')} body={paragraphs[0]} />

      {paragraphs.slice(1).map((paragraph, i) => (
        <Typography key={i} sx={{ color: 'text.secondary', mb: 2, maxWidth: '75ch', lineHeight: 1.8 }}>
          {paragraph}
        </Typography>
      ))}

      <Typography variant="h2" sx={{ mt: 5 }}>
        {t('about.valuesTitle')}
      </Typography>
      <Box sx={{ mt: 3 }}>
        <ResponsiveGrid columns={3}>
          {values.map((value) => (
            <MiniCard key={value.id} bordered={false} title={value.title[lang]} body={value.body[lang]} />
          ))}
        </ResponsiveGrid>
      </Box>

      <Typography variant="h2" sx={{ mt: 5 }}>
        {t('about.teamTitle')}
      </Typography>
      <Box component="ol" sx={{ display: 'flex', flexDirection: 'column', listStyle: 'none', p: 0, m: 0, mt: 3 }}>
        {processSteps.map((step, i) => (
          <Box
            key={step.id}
            component="li"
            sx={{
              display: 'flex',
              gap: 3,
              py: 3,
              borderTop: '1px solid',
              borderColor: 'divider',
              ...(i === processSteps.length - 1 && { borderBottom: '1px solid', borderColor: 'divider' }),
            }}
          >
            <Typography sx={{ fontSize: 'clamp(1.2rem, 1.15rem + 0.25vw, 1.32rem)', fontWeight: 700, color: 'brass.dark', minWidth: '2.4rem' }}>
              {String(step.id).padStart(2, '0')}
            </Typography>
            <Box>
              <Typography variant="h3" sx={{ mb: 0.4 }}>
                {step.title[lang]}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 0 }}>{step.body[lang]}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
