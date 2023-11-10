import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OurWorks from './OurWorks';
import Blog from './Blog';
import ProjectCalc from './ProjectCalc';
import Contact from './Contact';
import BlogPost from './BlogPost';
import CalculatorSelectService from './CalculatorSelectService';
import CalculatorStatusProject from './CalculatorStatusProject';
import CalculatorProjectTimeline from './CalculatorProjectTimeline';
import CalculatorDesignPreference from './CalculatorDesignPreference';
import CalculatorPageNumber from './CalculatorPageNumber';
import CalculatorProjectEstimate from './CalculatorProjectEstimate';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const [formData, setFormData] = useState({});

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/ourWorks' element={<OurWorks />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogPost' element={<BlogPost />} />
        <Route path='/projectCalculator' element={<ProjectCalc formData={formData} setFormData={setFormData} />} />    
        <Route path='/calculatorSelectService' element={<CalculatorSelectService formData={formData} setFormData={setFormData} />} />
        <Route path='/calculatorStatusProject' element={<CalculatorStatusProject formData={formData} setFormData={setFormData} />} />
        <Route path='/calculatorProjectTimeline' element={<CalculatorProjectTimeline formData={formData} setFormData={setFormData} />} />
        <Route path='/calculatorDesignPreference' element={<CalculatorDesignPreference formData={formData} setFormData={setFormData} />} />
        <Route path='/calculatorPageNumber' element={<CalculatorPageNumber formData={formData} setFormData={setFormData} />} />
        <Route path='/calculatorProjectEstimate' element={<CalculatorProjectEstimate formData={formData} setFormData={setFormData} />} />      
        <Route path='/contactUs' element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default Layout