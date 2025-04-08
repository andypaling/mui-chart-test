import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const data = [
  { month: 'Jan', sales: 100, profit: 50 },
  { month: 'Feb', sales: 140, profit: 70 },
  { month: 'Mar', sales: 110, profit: 55 },
  { month: 'Apr', sales: 170, profit: 85 },
  { month: 'May', sales: 150, profit: 75 },
  { month: 'Jun', sales: 210, profit: 105 },
];

function LineChartExample() {
  return (
    <LineChart
      xAxis={[{ 
        data: data.map(item => item.month),
        scaleType: 'point',
        label: 'Month'
      }]}
      series={[
        {
          data: data.map(item => item.sales),
          label: 'Sales',
          color: '#1976d2',
        },
        {
          data: data.map(item => item.profit),
          label: 'Profit',
          color: '#dc004e',
        },
      ]}
      height={300}
    />
  );
}

export default LineChartExample;
