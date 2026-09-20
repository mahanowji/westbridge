import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageHead({ title, body, sx = {} }) {
  return (
    <Box sx={{ maxWidth: 760, mb: 5, ...sx }}>
      <Typography variant="h1" sx={{ fontSize: 'clamp(1.9rem, 1.7rem + 1vw, 2.4rem)', mb: 2 }}>
        {title}
      </Typography>
      {body && <Typography sx={{ color: 'text.secondary', mb: 0 }}>{body}</Typography>}
    </Box>
  );
}
