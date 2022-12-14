import React from 'react';
import './App.css';
import WebcamCapture from './components/webcamcapture';
import Preview from './components/preview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from './components/chats';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="appBody">
          <Routes>
            <Route path="/preview" element={<Preview  />} />
            <Route exact path="/" element={<WebcamCapture />} />
            <Route exact path="/chats" element={<Chats />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
