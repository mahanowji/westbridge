import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { getCountry } from '../data/countries.jsx';

export default function BlogCard({ post }) {
  const { lang, t } = useLanguage();
  const country = post.country && post.country !== 'all' ? getCountry(post.country) : null;

  return (
    <Box
      component="article"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 0.5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 0.6,
          alignItems: 'center',
          color: 'text.secondary',
          fontSize: '0.82rem',
          flexWrap: 'wrap',
        }}
      >
        <span>
          {post.readTime} {t('blog.minRead')}
        </span>

        {country && (
          <>
            <span aria-hidden="true" style={{ opacity: 0.6 }}>
              &middot;
            </span>

            <span>
              {country.flag} {country.name[lang]}
            </span>
          </>
        )}
      </Box>

      <Typography variant="h3" sx={{ mb: 0.2 }}>
        <Box
          component={Link}
          to={`/blog/${post.slug}`}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&:hover': { color: 'eucalyptus.dark' },
          }}
        >
          {post.title[lang]}
        </Box>
      </Typography>

      <Typography sx={{ color: 'text.secondary', mb: 0.5 }}>
        {post.excerpt[lang]}
      </Typography>

      <Box
        component={Link}
        to={`/blog/${post.slug}`}
        sx={{
          color: 'brass.dark',
          fontWeight: 600,
          fontSize: '0.82rem',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {t('blog.readMore')}
      </Box>
    </Box>
  );
}