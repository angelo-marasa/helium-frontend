import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hotspots from './components/Hotspots';
import Hotspot from './components/Hotspot';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hotspot">
        <Route path=":hotspotAddress" element={<Hotspot />}  />
      </Route>
      <Route path="/hotspots" element={<Hotspots />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);