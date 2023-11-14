import React from 'react';
import "./ourworks.css";
import "./blog.css";
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
import Pagination from './Pagination';

const Blog = () => {
  return (
    <>
      <div className='padding1 bg1'>
        <div className='container'>
          <div>
            <p className='secOne-subheading'>Exploring Insights</p>
            <p className='secOne-heading'>Our Blog</p>
          </div>
          <p className='secOne-supportText'>
            Dive into a world of informative articles, expert insights &  industry trends
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='tabs pt-3'>
          <div className='row'>
            <div className='col-md-9'>
              <ul className="nav nav-underline">
                <li className="nav-item">
                  <Link className="nav-link blog-navLink" to="/blog">View all</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blog-navLink" to="/blog">Design</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blog-navLink" to="/blog">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blog-navLink" to="/blog">Software Engineering</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link blog-navLink" to="/blog">Customer Success</Link>
                </li>
              </ul>
            </div>

            <div className='col-md-3'>              
              <form role="search">
                <div className="input-group search-input">
                  <input className="form-control input" type="search" id='serach-input' placeholder="Search" aria-label="Search" />
                  <button className="btn search-btn" type="submit" id='search-btn'><BsSearch /></button>
                </div>                    
              </form>
            </div>
          </div>
        </div>

        <div className='blog-container'>
          <div className='row mt-5'>
            <div className='col-md-4'>              
              <div className='blog-img'>
                <img src='assets/image4.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Design</p>
                <Link to="/UXReview" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>UX review presentations</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>                
                <p className='blog-details'>
                  How do you create compelling presentations that wow your colleagues 
                  and impress your managers?
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Olivia Rhye</p>
                  <p className='blog-date'>20 Jan 2022</p>
                </div>                
              </div>
            </div>

            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='assets/image5.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Product</p>
                <Link to="/migratingLinear" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>Migrating to Linear 101</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  Linear helps streamline software projects, sprints, 
                  tasks, and bug tracking. Here’s how to get started.
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Phoenix Baker</p>
                  <p className='blog-date'>19 Jan 2022</p>
                </div>                
              </div>
            </div>

            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='assets/image6.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Building your API Stack</p>
                <Link to="/restfulApi" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>The Profound Benefits of RESTful APIs</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  The rise of RESTful APIs has been met by a rise in tools 
                  for creating, testing, and managing them.
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Lana Steiner</p>
                  <p className='blog-date'>18 Jan 2022</p>
                </div>                
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <div className='blog-img'>
                <img src='assets/image7.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Digital Transformation Insights</p>
                <Link to="/designWireframe" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>Embracing Digital Transformation</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  Explore the potential of digital transformation and how it's 
                  reshaping industries worldwide.
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Demi WIlkinson</p>
                  <p className='blog-date'>16 Jan 2022</p>
                </div>                
              </div>
            </div>

            <div className='col-md-6'>
              <div className='blog-img'>
                <img src='assets/image8.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Design</p>
                <Link to="/designWireframe" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>What is Wireframing?</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  Introduction to Wireframing and its Principles. Learn from the best 
                  in the industry.
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Candice Wu</p>
                  <p className='blog-date'>15 Jan 2022</p>
                </div>                
              </div>
            </div>
          </div>

          <div className='row'>            
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='assets/image9.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Design</p>
                <Link to="/designWireframe" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>How collaboration makes us better designers</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  Collaboration can make our teams stronger, and our individual designs better.
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Natali Craig</p>
                  <p className='blog-date'>14 Jan 2022</p>
                </div>                
              </div>
            </div>

            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='assets/image10.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Product</p>
                <Link to="/designWireframe" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>Our top 10 Javascript frameworks to use</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  How do you create compelling presentations that wow your colleagues 
                  and impress your managers?
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Drew Cano</p>
                  <p className='blog-date'>13 Jan 2022</p>
                </div>                
              </div>
            </div>

            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='assets/image11.png' alt='blog' className='img-fluid'/>
              </div>

              <div className='blog-post mt-3'>
                <p className='blog-subheading mb-1'>Customer Success</p>
                <Link to="/designWireframe" className='blogPost-link'>
                  <div className='d-flex justify-content-between'>
                    <p className='blog-heading'>Podcast: Creating a better CX Community</p>
                    <FiArrowUpRight className='blog-icon' />
                  </div>
                </Link>
                <p className='blog-details'>
                  Starting a community doesn’t need to be complicated, but how do you get started?
                </p>
                <div className='author'>
                  <p className='blog-author mb-0'>Orlando Diggs</p>
                  <p className='blog-date'>20 Jan 2022</p>
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

export default Blog