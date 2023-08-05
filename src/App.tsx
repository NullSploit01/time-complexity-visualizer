import '~/assets/styles/index.css';
import { Box } from '@mui/material';
import { centerBox } from '~/assets/styles/components/center-box.style';
import Graph from '~/components/graph.component';
import { useState } from 'react';
import SliderInput from './components/slider.component';
import Heading from './components/heading.component';

const App = () => {
  const [_operationCount, setOperationCount] = useState<number>(50);

  const handleInputChange = (_: Event, value: number | number[]) => {
    setOperationCount(value as number);
  };

  return (
    <Box sx={centerBox.container}>
      <Heading />
      <Graph operationCount={_operationCount} />
      <SliderInput
        operationCount={_operationCount}
        handleInputChange={handleInputChange}
      />
    </Box>
  );
};

export default App;
