import React from 'react';

import { Header } from './components/Header';
import { FlightsPage } from './pages/FlightsPage';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <FlightsPage />
    </div>
  );
}

export default App;
