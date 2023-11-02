import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const AboutSection = () => {
  return (
    <>
        <section className='d-padding1 container'>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className='heading-container'>
                        <p className='sub-heading'>ABOUT US</p>
                        <div>
                            <p className='about'>A Vision-Driven Software Development Agency, 
                            Crafting Digital Excellence One Line of Code at a Time
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='divider'>
                            <hr />
                        </div>

                        <div className='content-text'>
                            <p>WMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam</p>
                            <p>Tellus aliquam enim urna, etiam. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue 
                            enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
                            </p>
                            <p>WMi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam</p>
                        </div>
                    </div>

                    <div className='d-md-flex'>
                        <div className='m-2'>
                            <Link type="button" to="/aboutUs" className="btn btn-lg secondary-btn rounded-0">Learn More</Link>
                        </div>

                        <div className='m-2'>
                            <Link type="button" to="/contactUs" className="btn btn-lg primary-btn rounded-0">Get in Touch</Link>
                        </div>                              
                    </div>

                </div>

                <div className="col-lg-6 p-5">
                    <div className='content-image'>
                    <img src='assets/image2.png' alt='content' className='img-fluid' />
                    </div>      
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutSection