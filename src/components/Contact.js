import React from 'react';
import "./contact.css";
import "./ourworks.css";
import "./projectcalc.css";
// import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className='padding1 bg1'>
        <div className='container'>
          <div>
            <p className='secOne-subheading'>Get in Touch</p>
            <p className='secOne-heading'>Contact Us</p>
          </div>
          <p className='secOne-supportText'>
            Need assistance, or want to discuss your project further? We're here to help
          </p>
        </div>
      </div>

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='padding1'>
              <div className='padding2'>
                <div className='form-heading'>
                  <p>Let’s Help you Elevate your Brand</p>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div className="input-group">
                      <select className="form-select selectBtn-toggle">
                        <option selected>NG</option>
                        <option value="1">GERMANY</option>
                        <option value="2">USA</option>
                        <option value="3">UK</option>
                      </select>
                      <input type="text" className="form-control" id='phone' />
                    </div>
                  </div>               

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" placeholder="Leave us a message..." rows="3"></textarea>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" htmlFor="check1">Website design</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check2" />
                        <label className="form-check-label" for="check2">UX design</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check3" />
                        <label className="form-check-label" for="check3">User research</label>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check4" />
                        <label className="form-check-label" for="check4">App Development</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input checkbox" id="check4" />
                        <label className="form-check-label" for="check4">Web Development</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check4" />
                        <label className="form-check-label" for="check4">Other</label>
                      </div>
                    </div>                    
                  </div>

                    <div className='row'>
                      <button type="submit" className="btn form-submitBtn">Submit</button>
                    </div>

                </form>
              </div>
            </div>
          </div>

          <div className='col-lg-6 d-none d-lg-block'>
            <img src='assets/image15.png' alt='contact' className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact