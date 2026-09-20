import React from 'react';
import Box from '@mui/material/Box';

export default function ResponsiveGrid({ columns = 3, children, sx = {} }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: { xs: '1fr', md: `repeat(${columns}, 1fr)` },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
