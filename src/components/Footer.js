import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <div className='border-bottom-dark getInTouch mt-2 padding1'>
            <div className='container'>                
                <div className='inTouch'>
                    <h1>Have a project in mind? 
                        <Link to="/contactUs" className='inTouch-link mx-2'>Get in touch with us today!</Link>
                        <FiArrowUpRight className='arrowUpRight' />
                    </h1>
                </div>
            </div>
        </div>

        <footer className="footer-padding footer">
            <div className="padding2 p-5">                    
                <div className="d-flex flex-column flex-sm-row justify-content-between">
                    <div>
                        <div className="mb-3">
                            <Link className="footerLogo" to="/">
                                <img src='assets/logo.png' className='logo img-fluid' alt='logo' />
                            </Link>
                        </div>

                        <div className='d-flex flex-column flex-sm-row mb-3'>
                            <div className="m-2">
                                <Link className="footer-link" to="/">Home</Link>
                            </div>

                            <div className="m-2">
                                <Link className="footer-link" to="/aboutUs">About Us</Link>
                            </div>

                            <div className="m-2">
                                <Link className="footer-link" to="/ourWorks">Our Works</Link>
                            </div>

                            <div className="m-2">
                                <Link className="footer-link" to="/blog">Blog</Link>
                            </div>

                            <div className="m-2">
                                <Link className="footer-link" to="/projectCalculator">Project Calculator</Link>
                            </div>

                            <div className="m-2">
                                <Link className="footer-link" to="/contactUs">Contact Us</Link>
                            </div>
                        </div>
                    </div>                        
                                        
                    <div className="mb-3">
                        <form>
                            <p className='newsletter-heading'>Stay Up To Date</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="email" className="visually-hidden">Email address</label>
                                <input id="email" type="email" className="form-control rounded-0" placeholder="Enter Your Email" />
                                <button className="btn newsletter-btn rounded-0" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-3 border-top">
                    <p className='copyright mt-4'>© Sirleaf Development. All rights reserved.</p>
                    <ul className="list-unstyled d-flex mt-4">
                        <li className="ms-4" key="terms"><Link className="TCs" to="/">Terms</Link></li>
                        <li className="ms-4"key="privacy"><Link className="TCs" to="/">Privacy</Link></li>
                        <li className="ms-4" key="cookies"><Link className="TCs" to="/">Cookies</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer