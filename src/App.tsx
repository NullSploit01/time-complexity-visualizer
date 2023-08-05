import '~/assets/styles/index.css';
import { Box } from '@mui/material';
import { centerBox } from '~/assets/styles/components/center-box.style';
import Graph from '~/components/graph.component';
import { useState } from 'react';
import SliderInput from './components/slider.component';
import Heading from './components/heading.component';
import { IOptions } from './types/options.type';
import Options from './components/options.component';

const App = () => {
  const [_operationCount, setOperationCount] = useState<number>(50);
  const [_showOptions, setShowOptions] = useState<IOptions>({
    tooltip: false,
    legend: false,
  });

  const handleInputChange = (_: Event, value: number | number[]) => {
    setOperationCount(value as number);
  };

  return (
    <Box sx={centerBox.container}>
      <Heading />
      <Box sx={{ display: 'flex' }}>
        <Graph showOptions={_showOptions} operationCount={_operationCount} />
        <Options setShowOptions={setShowOptions} />
      </Box>

      <SliderInput
        operationCount={_operationCount}
        handleInputChange={handleInputChange}
      />
    </Box>
  );
};

export default App;
