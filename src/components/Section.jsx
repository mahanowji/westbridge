import React from 'react';
import Box from '@mui/material/Box';

export default function Section({ children, muted = false, component = 'section', sx = {}, innerSx = {}, ...rest }) {
  return (
    <Box
      component={component}
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        ...(muted && {
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }),
        ...sx,
      }}
      {...rest}
    >
      <Box sx={{ maxWidth: 1180, mx: 'auto', ...innerSx }}>{children}</Box>
    </Box>
  );
}
