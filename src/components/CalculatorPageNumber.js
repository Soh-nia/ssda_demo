import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';


const CalculatorPageNumber = () => {
  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>How many pages/screens do you have in mind?</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 py-3 slider-wrapper">
                        <input type="range" className="form-range" min="5" max="100" id="customRange" step='5' />
                        <div className='d-flex justify-content-between'>
                            <div className='justify-content-start range-inputs'>
                                <p>1 - 5 Pages</p>                                
                            </div>

                            <div className='justify-content-start range-inputs'>
                                <p>50 Pages</p>                                
                            </div>

                            <div className='justify-content-start range-inputs'>
                                <p>100+ Pages</p>                                
                            </div>
                        </div>
                    </div>                                
      
                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorDesignPreference" className="prev-link my-2 mx-3">Go Back</Link>
                        <Link to="/calculatorProjectEstimate" className="btn next-btn rounded-0">Submit</Link>
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorPageNumber