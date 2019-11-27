import React from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'

import './App.scss';

export default function App(props) {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

