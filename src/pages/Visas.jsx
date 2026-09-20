import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import ResponsiveGrid from '../components/ResponsiveGrid.jsx';
import VisaCard from '../components/VisaCard.jsx';
import { visas, visaCategories } from '../data/visas.jsx';
import { categoryIcons } from '../data/visaCategoryIcons.jsx';
import { countries } from '../data/countries.jsx';

export default function Visas() {
  const { t, lang } = useLanguage();
  const muiTheme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const countryParam = searchParams.get('country') || 'all';
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCountry, setActiveCountry] = useState(countryParam);
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  // Keep state in sync when the URL query changes (e.g. footer links).
  useEffect(() => {
    setActiveCountry(countryParam);
  }, [countryParam]);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const selectCountry = (id) => {
    setActiveCountry(id);
    if (id === 'all') {
      searchParams.delete('country');
    } else {
      searchParams.set('country', id);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const byCountry = useMemo(
    () => (activeCountry === 'all' ? visas : visas.filter((v) => v.country === activeCountry)),
    [activeCountry],
  );

  const filtered = useMemo(
    () => (activeCategory === 'all' ? byCountry : byCountry.filter((v) => v.category === activeCategory)),
    [byCountry, activeCategory],
  );

  // When no category is selected we group the results by category.
  const groups = useMemo(() => {
    if (activeCategory !== 'all') return null;
    return visaCategories
      .map((category) => ({
        category,
        items: byCountry.filter((visa) => visa.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [byCountry, activeCategory]);

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
    <Section sx={{ pt: { xs: 5, md: 5 } }}>
      <PageHead title={t('visas.pageTitle')} body={t('visas.pageIntro')} />

      {/* Country filter */}
      <Typography sx={{ fontWeight: 700, color: 'heading.main', mb: 1.5, fontSize: '0.88rem' }}>
        {t('visas.countryLabel')}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        <Chip
          label={`${t('visas.filterAllCountries')} (${visas.length})`}
          onClick={() => selectCountry('all')}
          variant="outlined"
          sx={chipSx(activeCountry === 'all')}
        />
        {countries.map((country) => {
          const count = visas.filter((v) => v.country === country.id).length;
          return (
            <Chip
              key={country.id}
              label={`${country.flag} ${country.name[lang]} (${count})`}
              onClick={() => selectCountry(country.id)}
              variant="outlined"
              sx={chipSx(activeCountry === country.id)}
            />
          );
        })}
      </Box>

      {/* Category filter */}
      <Typography sx={{ fontWeight: 700, color: 'heading.main', mb: 1.5, fontSize: '0.88rem' }}>
        {t('visas.categoryLabel')}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        <Chip
          label={`${t('visas.filterAll')} (${byCountry.length})`}
          onClick={() => setActiveCategory('all')}
          variant="outlined"
          sx={chipSx(activeCategory === 'all')}
        />
        {visaCategories.map((category) => {
          const count = byCountry.filter((v) => v.category === category).length;
          if (count === 0) return null;
          return (
            <Chip
              key={category}
              label={`${t(`visas.categories.${category}`)} (${count})`}
              onClick={() => setActiveCategory(category)}
              variant="outlined"
              sx={chipSx(activeCategory === category)}
            />
          );
        })}
      </Box>

      {filtered.length === 0 && (
        <Typography sx={{ color: 'text.secondary' }}>{t('visas.noResults')}</Typography>
      )}

      {activeCategory === 'all' ? (
        groups.map((group) => {
          const Icon = categoryIcons[group.category];
          return (
            <Box key={group.category} sx={{ mb: 6 }}>
              <Typography
                variant="h2"
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, color: 'heading.main' }}
              >
                {Icon && <Icon size={20} color={muiTheme.palette.brass.dark} />}
                {t(`visas.categories.${group.category}`)}
              </Typography>
              <ResponsiveGrid columns={3}>
                {group.items.map((visa) => (
                  <VisaCard key={visa.id} visa={visa} showCountry={activeCountry === 'all'} />
                ))}
              </ResponsiveGrid>
            </Box>
          );
        })
      ) : (
        <ResponsiveGrid columns={3}>
          {filtered.map((visa) => (
            <VisaCard key={visa.id} visa={visa} showCountry={activeCountry === 'all'} />
          ))}
        </ResponsiveGrid>
      )}
    </Section>
  );
}
