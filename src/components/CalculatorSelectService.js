import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';

const CalculatorSelectService = () => {
  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Select a Service</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="service" id="service1" />
                            <label className="form-check-label d-flex flex-column" htmlFor="service1">
                                <p className='mb-0 checkbox-text1'>Entire Project</p>
                                <p className='mt-1 checkbox-text2'>From Design and Development to Deployment and User Experience</p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="service" id="service2" />
                            <label className="form-check-label d-flex flex-column" htmlFor="service2">
                                <p className='mb-0 checkbox-text1'>Web Development</p>
                                <p className='mt-1 checkbox-text2'>
                                    Crafting visually stunning and functional websites to captivate your online audience
                                </p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="service" id="service3" />
                            <label className="form-check-label d-flex flex-column" htmlFor="service3">
                                <p className='mb-0 checkbox-text1'>Mobile App Development</p>
                                <p className='mt-1 checkbox-text2'>
                                    Designing and developing mobile applications for iOS and Android platforms.
                                </p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="my-3 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="service" id="service4" />
                            <label className="form-check-label d-flex flex-column" htmlFor="service4">
                                <p className='mb-0 checkbox-text1'>UI/UX Design</p>
                                <p className='mt-1 checkbox-text2'>
                                    Creating user-friendly interfaces and exceptional user experiences
                                </p>
                            </label>
                        </div>
                    </div>                    
                    

                    <div className='d-flex justify-content-end'>
                        <Link to="/calculatorStatusProject" className="btn next-btn rounded-0">Next</Link>
                    </div>

                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorSelectService