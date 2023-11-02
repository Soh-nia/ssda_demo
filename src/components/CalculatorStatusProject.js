import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';

const CalculatorStatusProject = () => {
  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Tell us the Status of the Project</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="status" id="status1" />
                            <label className="form-check-label d-flex flex-column" htmlFor="status1">
                                <p className='mb-0 checkbox-text1'>New Project</p>
                                <p className='mt-1 checkbox-text2'>If you have a brand new project that requires a budget estimate, select this option</p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="status" id="status2" />
                            <label className="form-check-label d-flex flex-column" htmlFor="status2">
                                <p className='mb-0 checkbox-text1'>Existing Project </p>
                                <p className='mt-1 checkbox-text2'>
                                    If you're already working on a project and need additional  support, select this option
                                </p>
                            </label>
                        </div>
                    </div>                   
                                       
                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorSelectService" className="prev-link my-2 mx-3">Go Back</Link>
                        <Link to="/calculatorProjectTimeline" className="btn next-btn rounded-0">Next</Link>
                    </div>                   
                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorStatusProject