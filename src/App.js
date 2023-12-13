import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Footer, Navbar } from './components';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  );
}