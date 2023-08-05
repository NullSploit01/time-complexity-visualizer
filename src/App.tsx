import '~/assets/styles/index.css';
import { Box, Slider } from '@mui/material';
import { centerBox } from '~/assets/styles/components/center-box.style';
import Graph from '~/components/graph.component';
import { useState } from 'react';

const App = () => {
  const [_operationCount, setOperationCount] = useState<number>(50);

  const handleChange = (_: Event, value: number | number[]) => {
    setOperationCount(value as number);
  };

  return (
    <Box sx={centerBox.container}>
      <Graph operationCount={_operationCount} />
      <Box width={300} mt={10}>
        <Slider
          min={10}
          max={15000}
          onChange={handleChange}
          value={_operationCount}
          valueLabelDisplay='auto'
        />
      </Box>
    </Box>
  );
};

export default App;
