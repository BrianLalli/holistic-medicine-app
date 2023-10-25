import logo from './logo.svg';
import './App.css';
import React from 'react';
import supabase from './services/supabaseClient';
import HomePage from './components/HomePage';
import Routes from './Routes';

function App() {
  return (
      <div className="App">
          <Routes />
      </div>
  );
}

export default App;
