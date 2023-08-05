import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const Footer: FC = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography color='GrayText' variant='caption'>
        ©{new Date().getFullYear()} NullSploit01
      </Typography>
    </Box>
  );
};

export default Footer;
