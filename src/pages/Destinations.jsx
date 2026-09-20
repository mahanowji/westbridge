import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Users, Languages, Coins, Clock, HeartPulse, GraduationCap, Sun, MapPin, Building2 } from 'lucide-react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import ResponsiveGrid from '../components/ResponsiveGrid.jsx';
import { countries } from '../data/countries.jsx';
import { countryFacts, countryOverview, getCities } from '../data/countryInfo.jsx';
import { visas } from '../data/visas.jsx';

const factIcons = {
  capital: Landmark,
  population: Users,
  language: Languages,
  currency: Coins,
  timezones: Clock,
  health: HeartPulse,
  education: GraduationCap,
  seasons: Sun,
};

export default function Destinations() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState('germany');

  const country = countries.find((c) => c.id === active) || countries[0];
  const facts = countryFacts[active] ?? [];
  const overview = countryOverview[active]?.[lang] ?? [];
  const cities = getCities(active);
  const visaCount = visas.filter((v) => v.country === active).length;

  const chipSx = (active) => ({
    fontWeight: active ? 600 : 500,
    bgcolor: active ? 'heading.main' : 'background.paper',
    color: active ? 'background.default' : 'text.primary',
    borderColor: active ? 'heading.main' : 'lineStrong.main',

    '&.MuiChip-clickable:hover': {
      bgcolor: active ? 'heading.main' : 'background.paper',
      color: active ? 'background.default' : 'text.primary',
      borderColor: active ? 'heading.main' : 'lineStrong.main',
    },

    '&.MuiChip-outlined.MuiChip-clickable:hover': {
      bgcolor: active ? 'heading.main' : 'background.paper',
      color: active ? 'background.default' : 'text.primary',
      borderColor: active ? 'heading.main' : 'lineStrong.main',
    },
  });

  return (
    <>
      <Section sx={{ pt: { xs: 5, md: 5 } }}>
        <PageHead title={t('destinations.pageTitle')} body={t('destinations.pageIntro')} />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 5 }}>
          {countries.map((c) => (
            <Chip
              key={c.id}
              label={`${c.flag} ${c.name[lang]}`}
              onClick={() => setActive(c.id)}
              variant="outlined"
              sx={chipSx(active === c.id)}
            />
          ))}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 0.5 }}>
            {country.flag} {country.name[lang]}
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: '75ch', lineHeight: 1.7 }}>{country.blurb[lang]}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              mt: 2,
              fontSize: '0.85rem',
              color: 'text.secondary',
              '& svg': { verticalAlign: '-2px', marginInlineEnd: '4px' },
            }}
          >
            <span>
              <Building2 size={15} />
              {t('destinations.authorityLabel')}: <strong>{country.authority[lang]}</strong>
            </span>
            <span>
              <MapPin size={15} />
              <strong>{visaCount}</strong> {t('destinations.visaCountLabel')}
            </span>
          </Box>
        </Box>

        <Typography variant="h2" sx={{ mt: 4, mb: 3 }}>
          {t('destinations.factsTitle')}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2.5,
            mb: 5,
          }}
        >
          {facts.map((fact) => {
            const Icon = factIcons[fact.id];
            return (
              <Box
                key={fact.id}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1.5,
                  p: 2.5,
                  bgcolor: 'background.paper',
                  boxShadow: '0 1px 2px rgba(27,42,40,0.04)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.6,
                    fontSize: '0.82rem',
                    color: 'text.secondary',
                    mb: 0.6,
                    '& svg': { color: 'eucalyptus.dark' },
                  }}
                >
                  {Icon && <Icon size={15} />}
                  {fact.label[lang]}
                </Box>
                <Typography sx={{ fontSize: 'clamp(1.05rem, 1rem + 0.25vw, 1.2rem)', color: 'heading.main', fontWeight: 700, lineHeight: 1.4 }}>
                  {fact.value[lang]}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Typography variant="h2">{t('destinations.whyTitle')}</Typography>
        {overview.map((paragraph, i) => (
          <Typography key={i} sx={{ maxWidth: '75ch', mt: 2, lineHeight: 1.8, color: 'text.primary' }}>
            {paragraph}
          </Typography>
        ))}

        <Box sx={{ mt: 4 }}>
          <Button component={Link} to={`/visas?country=${active}`} variant="contained" color="primary" size="large">
            {t('destinations.viewVisas')}
          </Button>
        </Box>
      </Section>

      <Section muted>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" sx={{ mb: 0.5 }}>
            {t('destinations.citiesTitle')} — {country.name[lang]}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('destinations.citiesIntro')}</Typography>
        </Box>

        <ResponsiveGrid columns={3}>
          {cities.map((city) => (
            <Box
              key={city.id}
              component="article"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1.5,
                p: 3,
                bgcolor: 'background.paper',
                boxShadow: '0 1px 2px rgba(27,42,40,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  boxShadow: '0 14px 28px -14px rgba(27,42,40,0.22)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                <Typography variant="h3" sx={{ mb: 0 }}>
                  {city.name[lang]}, {city.state}
                </Typography>
                {city.regional && (
                  <Chip
                    label={lang === 'fa' ? 'منطقه‌ای' : 'Regional'}
                    size="small"
                    sx={{ color: 'brass.dark', bgcolor: 'transparent', fontWeight: 600, fontSize: '0.8rem' }}
                  />
                )}
              </Box>
              <Typography sx={{ color: 'text.secondary', mb: 0, fontSize: '0.88rem', lineHeight: 1.6 }}>{city.blurb[lang]}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2.5,
                  fontSize: '0.82rem',
                  color: 'text.secondary',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  pt: 1.2,
                  mt: 0.5,
                  '& svg': { verticalAlign: '-2px', marginInlineEnd: '4px' },
                }}
              >
                <span>
                  <Users size={14} />
                  {city.population}
                </span>
                <span>
                  <Sun size={14} />
                  {city.climate[lang]}
                </span>
              </Box>
              <Box sx={{ fontSize: '0.82rem', color: 'text.secondary', '& svg': { verticalAlign: '-2px', marginInlineEnd: '4px' } }}>
                <MapPin size={14} />
                {t('destinations.knownForLabel')}: <strong>{city.knownFor[lang]}</strong>
              </Box>
            </Box>
          ))}
        </ResponsiveGrid>
      </Section>
    </>
  );
}
