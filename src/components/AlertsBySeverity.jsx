import React from 'react';
import Plot from 'react-plotly.js';
import { data } from './data';

const AlertsBySeverity = () => {
  const severityCounts = data.reduce((acc, curr) => {
    const severity = curr.alert.severity;
    acc[severity] = (acc[severity] || 0) + 1;
    return acc;
  }, {});

  const trace = {
    labels: Object.keys(severityCounts),
    values: Object.values(severityCounts),
    type: 'pie'
  };

  return (
    <Plot
      data={[trace]}
      layout={{ title: 'Alerts by Severity', template: 'plotly_dark',
      paper_bgcolor: '#000', // Set background color directly
      plot_bgcolor: '#001',
       }}
      useResizeHandler
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default AlertsBySeverity;
