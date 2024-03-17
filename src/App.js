import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pgSize={12} country="us" category="general" />} />
            <Route path="business" element={<News key="business" pgSize={12} country="us" category="business" />} />
            <Route path="entertainment" element={<News key="entertainment" pgSize={12} country="us" category="entertainment" />} />
            <Route path="health" element={<News key="health" pgSize={12} country="us" category="health" />} />
            <Route path="science" element={<News key="science" pgSize={12} country="us" category="science" />} />
            <Route path="technology" element={<News key="technology" pgSize={12} country="us" category="technology" />} />
            <Route path="sports" element={<News key="sports" pgSize={12} country="us" category="sports" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

