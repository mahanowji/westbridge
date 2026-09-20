import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { faqs } from '../data/faqs.jsx';
import { countries } from '../data/countries.jsx';

export default function FAQ({ showTabs = true, limit = null, country = 'all' }) {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(country);

  const active = showTabs ? activeTab : country;

  let items = faqs.filter((item) => active === 'all' || item.country === active || item.country === 'all');
  if (limit) items = items.slice(0, limit);

  return (
    <Box>
      {showTabs && (
        <Paper elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', mb: 4, bgcolor: 'transparent' }}>
          <Tabs
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="primary"
            indicatorColor="secondary"
          >
            <Tab label={t('faq.filterAll')} value="all" sx={{ fontWeight: 700 }} />
            {countries.map((c) => (
              <Tab
                key={c.id}
                label={`${c.flag} ${c.name[lang]}`}
                value={c.id}
                sx={{ fontWeight: 700 }}
              />
            ))}
          </Tabs>
        </Paper>
      )}

      <Box>
        {items.map((faq) => (
          <Accordion
            key={faq.id}
            disableGutters
            elevation={0}
            sx={{
              mb: 1.5,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px !important',
              overflow: 'hidden',
              bgcolor: 'background.paper',
              '&:before': { display: 'none' },
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: 'secondary.main',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
              sx={{ bgcolor: 'background.paper', px: 2.5, py: 1 }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'text.primary' }}>
                {faq.q[lang]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: 'background.default', px: 2.5, py: 2 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{faq.a[lang]}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
