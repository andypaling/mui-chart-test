import React, { useMemo } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';

const TimeSeriesChartExample = () => {
  // Generate the time series data
  const data = useMemo(() => {
    // Parameters
    const duration = 120; // seconds
    const samplingFrequency = 2048; // Hz
    const totalPoints = duration * samplingFrequency;
    
    // Generate full dataset
    const generateFullDataset = () => {
      const times = [];
      const values = [];
      
      for (let i = 0; i < totalPoints; i++) {
        const timePoint = i / samplingFrequency;
        times.push(timePoint);
        // Random value with some sinusoidal patterns to make it look like real data
        values.push(Math.random() * 2 - 1 + 0.5 * Math.sin(timePoint * 0.5) + 0.3 * Math.sin(timePoint * 2));
      }
      
      return { times, values };
    };
    
    // Generate downsampled dataset for better performance
    const downsampleData = (fullData, factor) => {
      const { times, values } = fullData;
      const downsampledTimes = [];
      const downsampledValues = [];
      
      for (let i = 0; i < times.length; i += factor) {
        downsampledTimes.push(times[i]);
        downsampledValues.push(values[i]);
      }
      
      return { times: downsampledTimes, values: downsampledValues };
    };
    
    // Generate data only for a specific time window
    const getTimeWindow = (fullData, startTime, endTime) => {
      const { times, values } = fullData;
      const windowTimes = [];
      const windowValues = [];
      
      for (let i = 0; i < times.length; i++) {
        if (times[i] >= startTime && times[i] <= endTime) {
          windowTimes.push(times[i]);
          windowValues.push(values[i]);
        }
      }
      
      return { times: windowTimes, values: windowValues };
    };
    
    // Generate the full dataset
    const fullData = generateFullDataset();
    
    // For display, let's use the first 2 seconds of data downsampled by 4
    // This gives us 2 seconds * 2048 Hz / 4 = 1024 points, which is reasonable for a web chart
    const displayData = getTimeWindow(fullData, 0, 2);
    const downsampledData = downsampleData(displayData, 4);
    
    return downsampledData;
  }, []);

  return (
    <Box sx={{ width: '100%', height: 600 }}>
      <LineChart
        series={[
          {
            data: data.values,
            label: 'Random Time Series',
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
