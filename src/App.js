import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BarChartExample from './components/BarChartExample';
import LineChartExample from './components/LineChartExample';
import PieChartExample from './components/PieChartExample';
import ScatterChartExample from './components/ScatterChartExample';
import TimeSeriesChartExample from './components/TimeSeriesChartExample';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            MUI-X Charts Examples
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>Time Series Chart (2048Hz sampling)</Typography>
                <TimeSeriesChartExample />
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>Bar Chart</Typography>
                <BarChartExample />
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>Line Chart</Typography>
                <LineChartExample />
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>Pie Chart</Typography>
                <PieChartExample />
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>Scatter Chart</Typography>
                <ScatterChartExample />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
