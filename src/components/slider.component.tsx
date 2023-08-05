import { FC } from 'react';
import { Box, Slider, Typography } from '@mui/material';
import { headerBox } from '~/assets/styles/components/header-box.style';
import {
  MaxOperations,
  MinOperations,
} from 'src/constants/time-complexity.constant';

type IProps = {
  operationCount: number;
  handleInputChange: (_: Event, value: number | number[]) => void;
};

const SliderInput: FC<IProps> = ({ operationCount, handleInputChange }) => {
  return (
    <Box sx={headerBox.container}>
      <Slider
        min={MinOperations}
        max={MaxOperations}
        value={operationCount}
        onChange={handleInputChange}
      />
      <Box>
        <Typography variant='inherit'>{operationCount} Operations</Typography>
      </Box>
    </Box>
  );
};

export default SliderInput;
