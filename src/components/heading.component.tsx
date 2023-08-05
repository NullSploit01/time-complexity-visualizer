import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { headerBox } from '~/assets/styles/components/header-box.style';

const Heading: FC = () => {
  return (
    <Box sx={headerBox.headingContainer}>
      <Typography variant='h3'>Big Nano</Typography>
      <Typography variant='subtitle1'>
        Another time complexity visualizer
      </Typography>
    </Box>
  );
};

export default Heading;
