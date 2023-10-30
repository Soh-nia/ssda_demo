import React from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';

const CalculatorProjectEstimate = () => {
  return (
    <>
        <div className='container pt-5'>
            <div className='d-flex'>
                <p className='service-heading'>Rough Estimate of your Project</p>
                <div>
                    <img src='assets/Hand-drawn arrow.png' alt='arrow' className='img-fluid' />
                </div>
            </div> 

            <div className='p-5'>
                <p className='estimate-text1'>Based on your Requirement</p>
                <p className='estimate-text2'>NGN 1,000,000.00</p>
                <p className='estimate-text3 mt-5'>If you need a detailed estimate for your project, 
                we can send it to your email.</p>                
            </div>

            <div className='d-flex'>
                <Link to="/calculatorSelectService" 
                className="btn next-btn rounded-0 mx-3"
                data-bs-toggle="modal" data-bs-target="#popUp">
                    Send Estimate to my Email
                </Link>
                <Link to="/CalculatorSelectService" className="btn startOver-btn rounded-0">Start Over</Link>
            </div>

            <div className="modal fade" id="popUp" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <p className="modal-text1" id="modalLabel">Email Address</p>
                                <p className="modal-text2">No spam or newsletters.</p>
                            </div>                            
                        </div>
                        <div className="modal-body">
                        <div className="mb-3 modalEmail d-flex">  
                            <BsEnvelope className="modalIcon my-3 mx-1" />      
                            <input type="email" className="form-control" id="email" placeholder='maya@sirleaf.com' />
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modalCancelBtn rounded-0" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn modalSubmitBtn rounded-0">Submit</button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </>

  )
}

export default CalculatorProjectEstimate