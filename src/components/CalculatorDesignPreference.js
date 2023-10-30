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
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="designPreference1" id="designPreference1" value="option1" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference1">Clean and Minimalistic
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="designPreference2" id="designPreference2" value="option2" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference2">
                                Bold and Creative
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="designPreference3" id="designPreference3" value="option3" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference3">
                                Elegant and Classic
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="designPreference4" id="designPreference4" value="option4" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference4">
                                Modern and Trendy
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-checks">
                            <input className="form-check-input" type="radio" name="designPreference5" id="designPreference5" value="option5" />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference5">
                                <p className='mb-0 checkbox-text1'>Other</p>
                                <input type="text" className="form-control other-input bg3" id="other" placeholder="Pls Specify" />                                
                            </label>
                        </div>
                    </div>                   
                    

                <div className='d-flex justify-content-between'>
                    <div className='line'>
                        <p className='not-visible'>text</p>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorProjectTimeline" className="prev-link my-2 mx-3">Go Back</Link>
                        <Link to="/calculatorPageNumber" className="btn next-btn rounded-0">Next</Link>
                    </div>
                    
                </div>

                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorDesignPreference