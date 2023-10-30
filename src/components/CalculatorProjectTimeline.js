import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';

const CalculatorProjectTimeline = () => {
  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Project Timeline</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="projectTimeline1" id="projectTimeline1" value="option1" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline1">Less than 1 week
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="projectTimeline2" id="projectTimeline2" value="option2" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline2">
                             1 to 4 weeks
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="projectTimeline3" id="projectTimeline3" value="option3" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline3">
                                1 to 3 months
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="projectTimeline4" id="projectTimeline4" value="option4" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline4">
                                3 to 6 months
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="projectTimeline5" id="projectTimeline5" value="option5" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline5">
                                Longer than 6 months
                            </label>
                        </div>
                    </div>                   
                    

                <div className='d-flex justify-content-between'>
                    <div className='line'>
                        <p className='not-visible'>text</p>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorStatusProject" className="prev-link my-2 mx-3">Go Back</Link>
                        <Link to="/calculatorDesignPreference" className="btn next-btn rounded-0">Next</Link>
                    </div>
                    
                </div>

                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorProjectTimeline