import React, { useMemo } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

const TimeSeriesChartExample = () => {
  // Generate the time series data
  const data = useMemo(() => {
    // Parameters
    const duration = 2; // showing only 2 seconds for better performance
    const samplingFrequency = 2048; // Hz
    const totalPoints = duration * samplingFrequency;
    
    // Generate dataset with full resolution
    const times = [];
    const values = [];
    
    for (let i = 0; i < totalPoints; i++) {
      const timePoint = i / samplingFrequency;
      times.push(timePoint);
      // Random value with some sinusoidal patterns to make it look like real data
      values.push(Math.random() * 2 - 1 + 0.5 * Math.sin(timePoint * 0.5) + 0.3 * Math.sin(timePoint * 2));
    }
    
    return { times, values };
  }, []);

  return (
    <Box sx={{ width: '100%', height: 600 }}>
      <LineChart
        series={[
          {
            data: data.values,
            label: 'Random Time Series (2048 Hz)',
            color: '#2196f3',
            showMark: false,
          },
        ]}
        xAxis={[
          {
            data: data.times,
            label: 'Time (seconds)',
            scaleType: 'linear',
          },
        ]}
        height={600}
        margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
      />
    </Box>
  );
};

export default TimeSeriesChartExample;
