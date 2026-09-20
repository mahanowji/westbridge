import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Section from '../components/Section.jsx';
import { blogPosts } from '../data/blogPosts.jsx';
import { getCountry } from '../data/countries.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const country = post.country && post.country !== 'all' ? getCountry(post.country) : null;

  const formattedDate = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(post.date));

  return (
    <Section component="article" sx={{ pt: { xs: 5, md: 5 } }} innerSx={{ maxWidth: 760 }}>
      <Box
        component={Link}
        to="/blog"
        sx={{
          display: 'inline-block',
          color: 'eucalyptus.dark',
          fontWeight: 600,
          mb: 4,
          borderBottom: '1px solid',
          pb: '2px',
          textDecoration: 'none',
        }}
      >
        {t('blog.backToBlog')}
      </Box>

      <Box component="header" sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 0.6, alignItems: 'center', color: 'text.secondary', fontSize: '0.82rem', flexWrap: 'wrap' }}>
          <span>{formattedDate}</span>
          <span aria-hidden="true" style={{ opacity: 0.6 }}>
            &middot;
          </span>
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
        <Typography variant="h1" sx={{ fontSize: 'clamp(1.9rem, 1.7rem + 1vw, 2.4rem)', mt: 0.5 }}>
          {post.title[lang]}
        </Typography>
      </Box>

      <Box>
        {post.content[lang].map((paragraph, index) => (
          <Typography key={index} sx={{ maxWidth: '70ch', color: 'text.primary', mb: 3 }}>
            {paragraph}
          </Typography>
        ))}
      </Box>
    </Section>
  );
}
