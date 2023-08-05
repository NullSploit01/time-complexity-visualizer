export enum TimeComplexityLabels {
  constant = 'O(1)',
  logarithmic = 'O(logN)',
  linear = 'O(N)',
  linear_log = 'O(N * logN)',
  quadratic = 'O(N^2)',
  cubic = 'O(N^3)',
  exponential = 'O(2^N)',
  factorial = 'O(N!)',
}

export type ITimeComplexity = {
  name: string;
  [TimeComplexityLabels.constant]: number;
  [TimeComplexityLabels.logarithmic]: number;
  [TimeComplexityLabels.linear]: number;
  [TimeComplexityLabels.linear_log]: number;
  [TimeComplexityLabels.quadratic]: number;
  [TimeComplexityLabels.cubic]: number;
  [TimeComplexityLabels.exponential]: number;
  [TimeComplexityLabels.factorial]: number;
};

export enum TimeComplexityGraphColor {
  constant = 'red',
  logarithmic = 'green',
  linear = 'blue',
  linear_log = 'brown',
  quadratic = 'black',
  cubic = 'cyan',
  exponential = 'violet',
  factorial = 'indigo',
}

export enum TimeComplexities {
  constant,
  logarithmic,
  linear,
  linear_log,
  quadratic,
  cubic,
  exponential,
  factorial,
}
