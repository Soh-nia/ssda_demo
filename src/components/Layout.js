import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OurWorks from './OurWorks';
import Blog from './Blog';
import ProjectCalc from './ProjectCalc';
import Contact from './Contact';
import CalculatorSelectService from './CalculatorSelectService';
import CalculatorStatusProject from './CalculatorStatusProject';
import CalculatorProjectTimeline from './CalculatorProjectTimeline';
import CalculatorDesignPreference from './CalculatorDesignPreference';
import CalculatorPageNumber from './CalculatorPageNumber';
import CalculatorProjectEstimate from './CalculatorProjectEstimate';
import DesignWireframe from './blogPosts/DesignWireframe';
import UXReview from './blogPosts/UXReview';
import MigratingLinear from './blogPosts/MigratingLinear';
import RestfulApi from './blogPosts/RestfulApi';
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
        <Route path='/designWireframe' element={<DesignWireframe />} />
        <Route path='/UXReview' element={<UXReview />} />
        <Route path='/migratingLinear' element={<MigratingLinear />} />
        <Route path='/restfulApi' element={<RestfulApi />} />
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