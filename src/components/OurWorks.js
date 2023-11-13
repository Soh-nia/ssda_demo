import React from 'react';
import "./ourworks.css";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const OurWorks = () => {
  return (
    <>
      <section className='padding1 bg1'>
        <div className='container'>
          <div>
            <p className='secOne-subheading'>Showcasing Excellence</p>
            <p className='secOne-heading'>Explore Our Works</p>
          </div>
          <p className='secOne-supportText'>
            Dive into a visual journey of our finest projects.
          </p>
        </div>
      </section>

      <div className='container mt-5'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link className='breadcrumb-link' to="/ourWorks">Mobile & Web Applications</Link></li>
            <li className="breadcrumb-item active breadcrumb2" aria-current="page">UI/UX Design</li>
          </ol>
        </nav>

        <div className='padding1'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='product-box1'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Empowering E-Commerce</p>                
                  <Link to="/ourWorks" className='link'><p className='product-title'>Online Marketplace: ShopX</p></Link>
                  <p className='product-text'>
                    ShopX is an innovative online marketplace that redefines 
                    the e-commerce experience. It offers a user-friendly interface, 
                    seamless transactions, and a wide range of products for a convenient
                     shopping journey.
                  </p>
                </div>
              </div>

              <div className='product-box2'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Connecting Communities</p>
                  <Link to="/ourWorks" className='link'><p className='product-title'>ConnectU</p></Link>
                  <p className='product-text'>
                    ConnectU is a vibrant social networking platform that brings 
                    communities together. It offers features for users to connect, 
                    share, and collaborate, fostering meaningful online interactions.
                  </p>
                </div>
              </div>

              <div className='product-box3'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Streamlining Business Operations</p>
                  <Link to="/ourWorks" className='link'><p className='product-title'>BIZ Flow</p></Link>
                  <p className='product-text'>
                    BizFlow is a comprehensive ERP system designed to streamline 
                    business operations. It integrates all key processes, from 
                    finance to inventory management, to boost productivity and efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='product-box4'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Enhancing Learning Experience</p>
                  <Link to="/ourWorks" className='link'><p className='product-title'>LearnHub</p></Link>
                  <p className='product-text'>
                    LearnHub is an e-learning platform that offers a diverse range of courses 
                    and interactive content. It promotes lifelong learning and skill development 
                    for students of all ages.
                  </p>
                </div>
              </div>

              <div className='product-box5'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Revolutionizing Healthcare</p>
                  <Link to="/ourWorks" className='link'><p className='product-title'>HealthConnect</p></Link>
                  <p className='product-text'>
                    HealthConnect is a telemedicine app that connects patients 
                    with healthcare providers for virtual consultations. It simplifies 
                    healthcare access, especially in remote areas.
                  </p>
                </div>
              </div>

              <div className='product-box6'>
                <div className='product-img'>
                  <img src='assets/image3.png' alt='image3' className='img-fluid' />
                </div>

                <div className='product-details pt-5'>
                  <p className='product-subtitle'>Optimizing Travel Planning</p>
                  <Link to="/ourWorks" className='link'><p className='product-title'>TravelEase</p></Link>
                  <p className='product-text'>
                    TravelEase is a user-friendly travel booking website that 
                    simplifies trip planning. It provides a seamless booking experience 
                    for flights, accommodations, and activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination />
      </div>            
    </>

  )
}

export default OurWorks