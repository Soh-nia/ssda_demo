import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./Index.css";
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Footer from './components/Footer';


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Layout />
      <Footer />
    </BrowserRouter>    
  )
}

export default App
