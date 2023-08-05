import { ITimeComplexities } from 'src/types/time-complexity.type';

export const TimeComplexityGraphColor: Record<ITimeComplexities, string> = {
  constant: 'red',
  logarithmic: 'green',
  linear: 'blue',
  linear_log: 'brown',
  quadratic: 'black',
  cubic: 'cyan',
  exponential: 'violet',
  factorial: 'indigo',
};

export const TimeComplexities: ITimeComplexities[] = [
  'constant',
  'logarithmic',
  'linear',
  'linear_log',
  'quadratic',
  'cubic',
  'exponential',
  'factorial',
];
