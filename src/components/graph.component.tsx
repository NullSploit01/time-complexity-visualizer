import { FC } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import {
  TimeComplexities,
  TimeComplexityGraphColor,
} from 'src/constants/time-complexity.constant';
import { TimeComplexityLabels } from 'src/types/time-complexity.type';
import { getTimeComplexities, getXAxisValues } from 'src/utils/math.util';

type IProps = {
  operationCount: number;
};

const Graph: FC<IProps> = ({ operationCount }) => {
  const xAxisValues = getXAxisValues(operationCount);
  const timeComplexities = getTimeComplexities(xAxisValues);

  return (
    <ResponsiveContainer width='70%' height='50%'>
      <LineChart width={500} height={300} data={timeComplexities}>
        <XAxis dataKey={TimeComplexityLabels.operations}>
          <Label value='Elements' offset={7} position='insideBottomLeft' />
        </XAxis>
        <YAxis
          scale='sqrt'
          ticks={[0, 10, 100, 1000, 1875, 3750, 5000, 7500, 10000, 15000]}
          domain={[0, 15000]}
          allowDataOverflow
        >
          <Label
            offset={7}
            value='No. Of Operations'
            angle={-90}
            position='insideBottomLeft'
          />
        </YAxis>
        {TimeComplexities.map((timeComplexity) => {
          return (
            <Line
              key={timeComplexity}
              type='monotone'
              dataKey={TimeComplexityLabels[timeComplexity]}
              stroke={TimeComplexityGraphColor[timeComplexity]}
            />
          );
        })}
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
