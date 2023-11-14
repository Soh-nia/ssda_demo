import React, { useRef } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_6fx5oug', 'template_pwoju1b', form.current, 'edQQH2UmcSI0WKqzm')
          .then((result) => {
            toast.success('Email successfully sent, check inbox');
          }, (error) => {
            toast.error('An error occurred. Please try again');
          });
      };

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

                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" name='fullName' placeholder="Enter Full Name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' required />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="phone" className="form-label">Phone Number</label>                    
                    <input type="text" className="form-control" id='phone' name='phone' required />                  
                  </div>               

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message"name='message' placeholder="Leave us a message..." rows="3" required></textarea>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check1" />
                        <label className="form-check-label" htmlFor="check1">Website design</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check2" />
                        <label className="form-check-label" htmlFor="check2">UX design</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check3" />
                        <label className="form-check-label" htmlFor="check3">User research</label>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check4" />
                        <label className="form-check-label" htmlFor="check4">App Development</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input checkbox" id="check5" />
                        <label className="form-check-label" htmlFor="check5">Web Development</label>
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check6" />
                        <label className="form-check-label" htmlFor="check6">Other</label>
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