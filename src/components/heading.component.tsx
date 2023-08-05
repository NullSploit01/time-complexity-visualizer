import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const Heading: FC = () => {
  return (
    <Box sx={{ height: 100, pb: 7 }}>
      <Typography variant='h3'>Big Nano</Typography>
      <Typography variant='subtitle1'>
        Another time complexity visualizer
      </Typography>
    </Box>
  );
};

export default Heading;
