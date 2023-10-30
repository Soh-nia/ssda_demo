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
                    <div className="mb-3 py-3">
                        <label for="customRange2" className="form-label"></label>
                        <input type="range" className="form-range range-input" min="0" max="5" id="customRange2" /> 
                    </div>                                
                    

                    <div className='d-flex justify-content-between'>
                        <div className='line'>
                            <p className='not-visible'>text</p>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Link to="/calculatorDesignPreference" className="prev-link my-2 mx-3">Go Back</Link>
                            <Link to="/calculatorProjectEstimate" className="btn next-btn rounded-0">Submit</Link>
                        </div>
                        
                    </div>

                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorPageNumber