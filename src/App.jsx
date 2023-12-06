import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Creatads from './components/Creatads';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container'
import CreateTextAd from './components/CreateTextAd';
import CreateMediaAd from './components/CreateMediaAd';

function App() {

  return (
    <>
      <Container maxWidth="sx">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Dashboard />}></Route>
              <Route exact path="/creatads" element={<Creatads/>}></Route>
              <Route  path="/createtextadd" element={<CreateTextAd/>}></Route>
              <Route  path="/createmediaadd" element={<CreateMediaAd/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App
