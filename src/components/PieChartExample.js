import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 35, label: 'Product A' },
  { id: 1, value: 25, label: 'Product B' },
  { id: 2, value: 20, label: 'Product C' },
  { id: 3, value: 15, label: 'Product D' },
  { id: 4, value: 5, label: 'Product E' },
];

function PieChartExample() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 4,
        },
      ]}
      height={300}
    />
  );
}

export default PieChartExample;
