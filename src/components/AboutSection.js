import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const AboutSection = () => {
  return (
    <>
        <section className='d-padding1 container'>
            <div className="row">
                <div className="col-12 col-lg-6 h-100">
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
                            <p>We prioritize staying ahead in the tech world through ongoing learning and adaptation, 
                                ensuring our clients benefit from cutting-edge software development. Quality is paramount, 
                                and we rigorously test our software for flawless, user-friendly, and superior performance.
                            </p>
                            <p>
                                At Sirleaf, we are dedicated to excellence and innovation. Our team comprises of seasoned developers,
                                designers, and project managers that can bring your digital vision to life across various industries.
                                We know what it takes to turn your vision into reality. 
                                From small startups to large enterprises, we have the flexibility to scale our services to your needs.
                            </p>                         
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

                <div className="col-12 col-lg-6 p-5 h-100">
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