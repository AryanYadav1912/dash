import React from 'react';
import Plot from 'react-plotly.js';
import { data } from './data';

const AlertFrequency = () => {
  const timestamps = data.map(d => new Date(d.timestamp));
  
  const trace = {
    x: timestamps,
    y: timestamps.map((_, index) => index + 1),
    type: 'scatter'
  };

  return (
    <Plot
      data={[trace]}
      layout={{ title: 'Alert Frequency Over Time', template: 'plotly_dark',
      paper_bgcolor: '#000', // Set background color directly
      plot_bgcolor: '#001',
       }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AlertFrequency;
