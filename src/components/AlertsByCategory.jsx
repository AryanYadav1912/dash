import React from 'react';
import Plot from 'react-plotly.js';
import { data } from './data';

const AlertsByCategory = () => {
  const categoryCounts = data.reduce((acc, curr) => {
    const category = curr.alert.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    x: Object.keys(categoryCounts),
    y: Object.values(categoryCounts),
    type: 'bar'
  };

  return (
    <Plot
      data={[trace]}
      layout={{ title: 'Alerts by Category', template: 'plotly_dark',paper_bgcolor: '#000', // Set background color directly
      plot_bgcolor: '#001', }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AlertsByCategory;
