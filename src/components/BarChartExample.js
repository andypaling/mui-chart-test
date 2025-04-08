import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { month: 'Jan', sales: 100 },
  { month: 'Feb', sales: 140 },
  { month: 'Mar', sales: 110 },
  { month: 'Apr', sales: 170 },
  { month: 'May', sales: 150 },
  { month: 'Jun', sales: 210 },
];

function BarChartExample() {
  return (
    <BarChart
      xAxis={[{ 
        scaleType: 'band', 
        data: data.map(item => item.month),
        label: 'Month'
      }]}
      series={[
        { 
          data: data.map(item => item.sales),
          label: 'Sales', 
          color: '#1976d2'
        }
      ]}
      height={300}
    />
  );
}

export default BarChartExample;
