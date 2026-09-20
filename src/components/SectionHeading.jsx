import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SectionHeading({ title, body, align = 'start' }) {
  return (
    <Box sx={{ textAlign: align === 'center' ? 'center' : 'start' }}>
      <Typography variant="h2" sx={{ color: 'heading.main', mb: 0.5 }}>
        {title}
      </Typography>
      {body && (
        <Typography sx={{ color: 'text.secondary', mb: 0 }}>
          {body}
        </Typography>
      )}
    </Box>
  );
}
