import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const data = [
  { x: 100, y: 200, id: 1 },
  { x: 120, y: 100, id: 2 },
  { x: 170, y: 300, id: 3 },
  { x: 140, y: 250, id: 4 },
  { x: 150, y: 400, id: 5 },
  { x: 110, y: 280, id: 6 },
];

const data2 = [
  { x: 300, y: 300, id: 1 },
  { x: 320, y: 100, id: 2 },
  { x: 270, y: 150, id: 3 },
  { x: 240, y: 220, id: 4 },
  { x: 280, y: 270, id: 5 },
  { x: 310, y: 180, id: 6 },
];

function ScatterChartExample() {
  return (
    <ScatterChart
      series={[
        {
          data: data,
          label: 'Group A',
          valueFormatter: ({ x, y }) => `${x}ms: ${y}kg`,
        },
        {
          data: data2,
          label: 'Group B',
          valueFormatter: ({ x, y }) => `${x}ms: ${y}kg`,
        },
      ]}
      height={300}
    />
  );
}

export default ScatterChartExample;
