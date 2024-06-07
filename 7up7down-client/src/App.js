import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/Game';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  </Router>
);

export default App;
