import React from 'react';
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

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<About />} />
        <Route path='/ourWorks' element={<OurWorks />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogPost' element={<BlogPost />} />
        <Route path='/projectCalculator' element={<ProjectCalc />} />
        <Route path='/calculatorSelectService' element={<CalculatorSelectService />} />
        <Route path='/calculatorStatusProject' element={<CalculatorStatusProject />} />
        <Route path='/calculatorProjectTimeline' element={<CalculatorProjectTimeline />} />
        <Route path='/calculatorDesignPreference' element={<CalculatorDesignPreference />} />
        <Route path='/calculatorPageNumber' element={<CalculatorPageNumber />} />
        <Route path='/calculatorProjectEstimate' element={<CalculatorProjectEstimate />} />
        <Route path='/contactUs' element={<Contact />} />
      </Routes>
    </>
  )
}

export default Layout