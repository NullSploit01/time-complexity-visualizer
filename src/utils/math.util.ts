import {
  ITimeComplexity,
  TimeComplexityLabels,
} from 'src/types/time-complexity.type';

export const factorialize = (num: number) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return Math.round(num);
};

export const getXAxisValues = (operationCount: number) => {
  if (operationCount < 10) {
    operationCount = 10;
  }

  const thresholdValues = [0, 8, 4, 2, 1];

  const xAxisValues: number[] = [];

  thresholdValues.map((thresholdValue) => {
    const currentThresholdValue = thresholdValue
      ? Math.ceil(operationCount / thresholdValue)
      : 0;
    xAxisValues.push(currentThresholdValue);
  });

  return xAxisValues;
};

export const getTimeComplexities = (values: number[]) => {
  const timeComplexities: ITimeComplexity[] = [];

  values.map((value) => {
    if (value === 0) {
      value = 1;
    }

    const timeComplexity: ITimeComplexity = {
      name: String(value),
      [TimeComplexityLabels.constant]: Math.pow(value, 0),
      [TimeComplexityLabels.logarithmic]: Math.round(Math.log2(value)),
      [TimeComplexityLabels.linear]: value,
      [TimeComplexityLabels.linear_log]: Math.round(value * Math.log2(value)),
      [TimeComplexityLabels.quadratic]: Math.pow(value, 2),
      [TimeComplexityLabels.cubic]: Math.pow(value, 3),
      [TimeComplexityLabels.exponential]: Math.round(Math.pow(2, value)),
      [TimeComplexityLabels.factorial]: factorialize(value),
    };

    timeComplexities.push(timeComplexity);
  });

  return timeComplexities;
};
