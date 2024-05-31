import React from 'react';
import './App.css'; 
import AlertFrequency from './components/AlertFrequency';
import AlertsByCategory from './components/AlertsByCategory';
import AlertsBySeverity from './components/AlertsBySeverity';

function App() {
  return (
    <div className="App">
      <AlertFrequency />
      <AlertsByCategory />
      <AlertsBySeverity />
    </div>
  );
}

export default App;
