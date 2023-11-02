import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import AboutSection from './AboutSection';
import SocialProof from './SocialProof';
import Team from './Team';
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { PiChatsCircleFill } from 'react-icons/pi';
import { BiSolidZap, BiLineChart } from 'react-icons/bi';
import { FaRegSmileBeam } from 'react-icons/fa';
import { FiCommand } from 'react-icons/fi';
import { TbMessageCircleHeart } from 'react-icons/tb';


const Home = () => {
  return (
    <>
      <div className='d-padding1 container'>
        <div className="row">
          <div className="col-12 col-lg-7">
            <div>
              <h1 className='welcome-heading'>Welcome to Sirleaf Software Development Agency</h1>
            </div>

            <div>
              <p className='welcome-text'>Welcome to Sirleaf Software Development Agency - Your Partner for Web and Mobile Design, 
                Brand Identity Creation, Startup Launch, and Online Customer Engagement. Crafting Websites, Apps, 
                and Relationships through Exceptional Design and Technical Excellence
              </p>
            </div>

            <div>
              <Link to="/" className="btn btn-lg primary-btn rounded-0">Get in Touch</Link>
            </div>
          </div>

          <div className="col-lg-5 p-5 d-none d-lg-block">
            <div className='row'>
              <div className='col-3'>
                <p className='benefits'>Benefits!</p>
              </div>

              <div className='col-9'>
                <div>
                  <img src='assets/Hand-drawn arrow.png' alt='arrow' className='arrow mt-3' />
                </div> 

                <div>
                  <img src='assets/Check items.png' alt='check' className='check-items mt-3' />
                </div>            
              </div>
            </div>            
          </div>
        </div>
      </div>

      <div>
        <img src='assets/image1.png' alt='image1' className='img-fluid' />
      </div>

      <SocialProof />

      <AboutSection />

      <div className='text-center d-padding1 border-top'>        
        <div className='d-padding2'>          
          <div className='metrics-container'>
            <div className='p-4'>
              <h1 className='metrics-heading'>Discover Our Impact</h1>
              <p className='metrics-subheading'>Explore our key performance metrics that reflect our experience, 
                client satisfaction, and role in empowering startups.
              </p>
            </div>

            <div className='metrics row text-center p-4'>
              <div className='col-md-4'>
                <div>
                  <p className='metric1'>400+</p>
                  <p className='metric2'>Projects completed</p>
                  <Link to='/' className='d-none d-lg-block metric-link'>Learn more
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>

              <div className='col-md-4'>
                <div>
                  <p className='metric1'>600%</p>
                  <p className='metric2'>Return on investment</p>
                  <Link to='' className='d-none d-lg-block metric-link'>Learn more
                    <BsArrowRightShort className='metric-icon' />
                  </Link>
                </div>
              </div>

              <div className='col-md-4'>
                <div>
                  <p className='metric1'>10k</p>
                  <p className='metric2'>Global downloads</p>
                  <Link to='/' className='d-none d-lg-block metric-link'>Learn more
                    <BsArrowRightShort className='metric-icon' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-padding1 border-top'>
        <div className='container'>
          <div className='pt-4'>
            <p className='features-subheading'>Empowering Your Vision with Expertise</p>
            <p className='features-heading'>Our Comprehensive Services</p>
            <p className='features-subheading2'>Explore Our Multifaceted Suite 
              of Software Services, Crafted to Elevate Your Every Need and Aspire to 
              Innovate Beyond Boundaries
            </p>            
          </div>

          <div className='feature-container'>
            <div className="row g-4 row-cols-1 row-cols-lg-3">
              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <PiChatsCircleFill className='icons' />
                </div>
                <div>
                  <p className='feature-title'>Web Development</p>
                  <p className='feature-details'>
                    Creating websites and web applications using various technologies and frameworks 
                    to meet specific business needs.
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>                
              </div>

              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <BiSolidZap className='icons' />
                </div>
                <div>
                  <p className='feature-title'>Mobile App Development</p>
                  <p className='feature-details'>
                    Designing and developing mobile applications for iOS and Android platforms. 
                    (using frameworks like React Native or Flutter)
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <BiLineChart className='icons' />
                </div>
                <div>
                  <p className='feature-title'>Custom Software Development</p>
                  <p className='feature-details'>
                    Creating software solutions uniquely crafted to meet the specific and often 
                    complex requirements of each client.
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <FaRegSmileBeam className='icons' />
                </div>
                <div>
                  <p className='feature-title'>UI/UX Design</p>
                  <p className='feature-details'>
                    Crafting user interfaces and user experiences that are visually appealing and 
                    user-friendly and User-Centered.
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <FiCommand className='icons' />
                </div>
                <div>
                  <p className='feature-title'>Software Consulting</p>
                  <p className='feature-details'>
                    Providing expert advice on software architecture, technology stack, 
                    and project planning. System scalability, performance, and maintainability.
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>

              <div className="col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <TbMessageCircleHeart className='icons' />
                </div>
                <div>
                  <p className='feature-title'>Quality Assurance and Testing</p>
                  <p className='feature-details'>
                    Ensuring the quality and reliability of software through testing, including manual 
                    and automated testing.
                  </p>
                  <Link to="/" className="feature-link">
                    Learn More
                    <BsArrowRightShort className='arrowRight-icon' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Team />

      <div className='bg-371863 d-padding1'>
        <div className='text-center d-padding2'>
            <p className='user-experience'>
              A true user experience is created by combining excellent design with high-quality programming.
            </p>
          </div>
      </div>

      <div className='d-padding1 container'>
        <div className="row">
          <div className="col-lg-9">            
            <p className='sub-heading'>Our Proud Portfolios</p>
            <h1 className='about'>Discover Our Featured Projects</h1>
            <p className='portfolio-text'>
              Experience our successful projects that showcase innovation, creativity, 
              and technical mastery
            </p>
          </div>

          <div className="col-lg-3 pt-5">
            <div className='d-flex justify-content-end'>
              <Link to="/ourWorks" className="btn btn-lg primary-btn rounded-0">Show All Works</Link>
            </div>
          </div>
        </div>

        <div className="row pt-5">          
          <div className="col-lg-6">             
            <div>
              <img src='assets/image3.png' alt='image3' className='img-fluid' />
            </div>
            
            <div>
              <p className='application-design'>Application Design 1</p>
              <p className='ux-design'>UI/UX Design</p>
            </div>              
          </div>

          <div className="col-lg-6">
            <div>
              <img src='assets/image3.png' alt='image3' className='img-fluid' />
            </div>
              
            <div>
              <p className='application-design'>Application Design 2</p>
              <p className='ui/ux-design'>UI/UX Design</p>
            </div>  
          </div>
        </div>
      </div>

      <div className='d-padding1 border-top'>
        <div className='container'>
          <div className='d-padding2'>
            <p className='testimonial-subheading'>Words from Our Clients</p>
            <p className='testimonial-heading'>Client Testimonials</p>
            <p className='testimonial-supporting'>Hear what our satisfied clients have to say about their 
              experiences working with us.
            </p>            
          </div>

          <div className='testimonial-carousel d-padding2'>
            <div id="testimonial" className="carousel slide mb-6" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#testimonial" data-bs-slide-to="0" className="indicator" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#testimonial" data-bs-slide-to="1" aria-label="Slide 2" className="indicator"></button>
                <button type="button" data-bs-target="#testimonial" data-bs-slide-to="2" aria-label="Slide 3" className="active indicator" aria-current="true"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className='row p-4'>
                    <div className='col-lg-5 mb-3'>
                      <div className='client'>
                        <div className='client-img'>
                          <img src='assets/Avatar.png' alt='avatar' className='img-fluid' />
                        </div>
                        <p className='client-name'>Kelly Williams</p>
                        <p className='client-position'>Head of Design, Layers</p>
                        <div className='stars'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-7'>
                      <p className='client-quote'>
                        The Sirleaf team played a pivotal role in launching our startup. 
                        Their guidance, technical excellence, and commitment to our vision 
                        were instrumental in our success. We couldn't be happier with the results
                      </p>
                    </div>
                  </div>                
                </div>

                <div className="carousel-item active carousel-item-start">
                  <div className='row p-4'>
                    <div className='col-lg-5 mb-3'>
                      <div className='client'>
                        <div className='client-img'>
                          <img src='assets/Avatar.png' alt='avatar' className='img-fluid' />
                        </div>
                        <p className='client-name'>Kelly Williams</p>
                        <p className='client-position'>Head of Design, Layers</p>
                        <div className='stars'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-7'>
                      <p className='client-quote'>
                        The Sirleaf team played a pivotal role in launching our startup. 
                        Their guidance, technical excellence, and commitment to our vision 
                        were instrumental in our success. We couldn't be happier with the results
                      </p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item carousel-item-next carousel-item-start">
                  <div className='row p-4'>
                    <div className='col-lg-5 mb-3'>
                      <div className='client'>
                        <div className='client-img mb-3'>
                          <img src='assets/Avatar.png' alt='avatar' className='img-fluid' />
                        </div>
                        <p className='client-name'>Kelly Williams</p>
                        <p className='client-position'>Head of Design, Layers</p>
                        <div className='stars'>
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-7'>
                      <p className='client-quote'>
                        The Sirleaf team played a pivotal role in launching our startup. 
                        Their guidance, technical excellence, and commitment to our vision 
                        were instrumental in our success. We couldn't be happier with the results
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#testimonial" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonial" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>  
          </div>
        </div>
      </div>

    </>


  )
}

export default Home