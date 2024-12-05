import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Privacypolicy from "./pages/Privacypolicy.jsx";
import Termsconditions from "./pages/Termsconditions.jsx";



import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/Privacypolicy" element={<Privacypolicy />} />
            <Route path="/Termsconditions" element={<Termsconditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
