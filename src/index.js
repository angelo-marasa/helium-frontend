import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hotspots from './components/Hotspots';
import Hotspot from './components/Hotspot';
import Login from './components/Login';
import Logout from './components/Logout';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/hotspot"> 
        <Route path=":hotspotAddress" element={<Hotspot />}  />
      </Route>
      {/* <Route path="/hotspotz" element={<Navigate replace to="/hotspots" />} /> */}
      <Route path="/hotspots" element={<Hotspots />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
