import { FC } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import {
  TimeComplexityGraphColor,
  TimeComplexityLabels,
} from 'src/types/time-complexity.type';
import { getTimeComplexities, getXAxisValues } from 'src/utils/math.util';

type IProps = {
  operationCount: number;
};

const Graph: FC<IProps> = ({ operationCount }) => {
  const xAxisValues = getXAxisValues(operationCount);
  const data = getTimeComplexities(xAxisValues);

  return (
    <ResponsiveContainer width='70%' height='50%'>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey='name' />
        <YAxis
          scale='sqrt'
          ticks={[0, 10, 100, 1000, 2500, 5000, 10000, 15000]}
          domain={[0, 15000]}
          allowDataOverflow
        />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.constant}
          stroke={TimeComplexityGraphColor.constant}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.logarithmic}
          stroke={TimeComplexityGraphColor.logarithmic}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.linear}
          stroke={TimeComplexityGraphColor.linear}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.linear_log}
          stroke={TimeComplexityGraphColor.linear_log}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.quadratic}
          stroke={TimeComplexityGraphColor.quadratic}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.cubic}
          stroke={TimeComplexityGraphColor.cubic}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.exponential}
          stroke={TimeComplexityGraphColor.exponential}
        />
        <Line
          type='monotone'
          dataKey={TimeComplexityLabels.factorial}
          stroke={TimeComplexityGraphColor.factorial}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
