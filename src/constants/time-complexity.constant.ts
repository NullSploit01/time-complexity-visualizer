import { ITimeComplexities } from 'src/types/time-complexity.type';

export const TimeComplexityGraphColor: Record<ITimeComplexities, string> = {
  constant: '#ffe119',
  logarithmic: '#3cb44b',
  linear: '#e6194B',
  linear_log: '#4363d8',
  quadratic: '#f58231',
  cubic: '#911eb4',
  exponential: '#42d4f4',
  factorial: '#000075',
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

export const MinOperations = 10;
export const MaxOperations = 15000;
