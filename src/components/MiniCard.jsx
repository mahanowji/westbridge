import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MiniCard({ icon: Icon, title, body, bordered = true }) {
  return (
    <Box
      sx={{
        px: bordered ? 3 : 0,
        py: 3,
        ...(bordered
          ? { border: '1px solid', borderColor: 'divider' }
          : { borderTop: '1px solid', borderColor: 'divider' }),
        borderRadius: bordered ? 1.5 : 0,
        bgcolor: bordered ? 'background.paper' : 'transparent',
        boxShadow: bordered ? '0 1px 2px rgba(27,42,40,0.04)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
        '&:hover': bordered
          ? {
              boxShadow: '0 14px 28px -14px rgba(27,42,40,0.22)',
              transform: 'translateY(-2px)',
              borderColor: 'lineStrong.main',
            }
          : {},
      }}
    >
      {Icon && (
        <Box
          sx={{
            width: '2.6rem',
            height: '2.6rem',
            borderRadius: '50%',
            bgcolor: 'rgba(75,99,88,0.16)',
            color: 'eucalyptus.dark',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Icon size={19} />
        </Box>
      )}
      <Typography variant="h3" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 0 }}>{body}</Typography>
    </Box>
  );
}
