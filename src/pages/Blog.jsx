import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import PageHead from '../components/PageHead.jsx';
import ResponsiveGrid from '../components/ResponsiveGrid.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogPosts } from '../data/blogPosts.jsx';
import { countries } from '../data/countries.jsx';

export default function Blog() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState('all');

  const sorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  );

  const filtered = useMemo(
    () => (active === 'all' ? sorted : sorted.filter((p) => p.country === active || p.country === 'all')),
    [sorted, active],
  );

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
      <PageHead title={t('blog.pageTitle')} body={t('blog.pageIntro')} />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        <Chip
          label={t('blog.filterAll')}
          onClick={() => setActive('all')}
          variant="outlined"
          sx={chipSx(active === 'all')}
        />
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

      <ResponsiveGrid columns={3}>
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ResponsiveGrid>
    </Section>
  );
}
