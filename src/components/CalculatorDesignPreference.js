import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';


const CalculatorDesignPreference = () => {
  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Design Preference</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="designPreference" id="designPreference1" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference1">Clean and Minimalistic
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="designPreference" id="designPreference2" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference2">
                                Bold and Creative
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="designPreference" id="designPreference3" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference3">
                                Elegant and Classic
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="designPreference" id="designPreference4" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference4">
                                Modern and Trendy
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="designPreference" id="designPreference5" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference5">
                                <p className='mb-0 checkbox-text1'>Other</p>
                                <input type="text" className="form-control bg3" id="other" placeholder="Pls Specify" />                                
                            </label>
                        </div>
                    </div>                   
                    
                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorProjectTimeline" className="prev-link my-2 mx-3">Go Back</Link>
                        <Link to="/calculatorPageNumber" className="btn next-btn rounded-0">Next</Link>
                    </div>                    
                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorDesignPreference