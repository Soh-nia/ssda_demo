import React from 'react';
import "./About.css";
import AboutSection from './AboutSection';
import SocialProof from './SocialProof';
import Team from './Team';
import { PiChatsCircleFill } from 'react-icons/pi';
import { BiSolidZap, BiLineChart } from 'react-icons/bi';
import { FaRegSmileBeam } from 'react-icons/fa';
import { FiCommand } from 'react-icons/fi';
import { TbMessageCircleHeart } from 'react-icons/tb';

const About = () => {
  return (
    <>
      <section className='padding1 bg1'>
        <div className='container'>
          <div>
            <p className='subheading1'>Our Story</p>
            <p className='heading1'>About the company</p>
          </div>
          <p className='supporting-text1'>
            Discover the essence of who we are, & our journey.
          </p>
        </div>
      </section>

      <AboutSection />

      <section className='padding1 bg2'>
        <div className='container padding2'>
          <div>
            <p className='metric-heading'>We’re only just getting started on our journey</p>
            <p className='metric-text'>Everything you need to build modern UI and great products.</p>
          </div>

          <div>
            <div className='row text-center p-4'>
              <div className='col-md-3'>
                <div>
                  <p className='metricItem-number'>400+</p>
                  <p className='metricItem1'>Projects completed</p>
                  <p className='metricItem2'>We’ve helped build over 400 amazing projects.</p>
                </div>
              </div>

              <div className='col-md-3'>
                <div>
                  <p className='metricItem-number'>98%</p>
                  <p className='metricItem1'>Satisfaction Rate</p>
                  <p className='metricItem2'>Our customers have reported an average of ~600% ROI.</p>                  
                </div>
              </div>

              <div className='col-md-3'>
                <div>
                  <p className='metricItem-number'>10k</p>
                  <p className='metricItem1'>Start up Lunched</p>
                  <p className='metricItem2'>Our free UI kit has been downloaded over 100k times.</p> 
                </div>
              </div>

              <div className='col-md-3'>
                <div>
                  <p className='metricItem-number'>200+</p>
                  <p className='metricItem1'>5-star reviews</p>
                  <p className='metricItem2'>We’re proud of our 5-star rating with over 200 reviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      <Team />

      <section className='padding1 bg2'>
        <div className='container padding2'>
          <div>
            <p className='subheading2'>Our values</p>
            <p className='heading2'>How we work at Sirleaf</p>
            <p className='supporting-text2'>Our shared values keep us connected and guide us as one team.</p>
          </div>          

          <div className="row g-4 row-cols-1 row-cols-lg-3">
              <div className="feature col d-flex align-items-start">
                <div className="feature-icon d-none d-lg-block mx-1">
                  <PiChatsCircleFill className='icons mx-1' />
                </div>
                <div>
                  <h3>Share team inboxes</h3>
                  <p>
                    Whether you have a team of 2 or 200, our shared team 
                    inboxes keep everyone on the same page and in the loop.
                  </p>
                </div>                
              </div>

              <div class="feature col d-flex align-items-start">
                <div class="feature-icon d-none d-lg-block mx-1">
                  <BiSolidZap className='icons' />
                </div>
                <div>
                  <h3>Deliver instant answers</h3>
                  <p>
                    An all-in-one customer service platform that helps you balance 
                    everything your customers need to be happy.
                  </p>
                </div>
              </div>

              <div class="feature col d-flex align-items-start">
                <div class="feature-icon d-none d-lg-block mx-1">
                  <BiLineChart className='icons' />
                </div>
                <div>
                  <h3>Manage your team with reports</h3>
                  <p>
                    Measure what matters with Untitled’s easy-to-use reports. You can filter, 
                    export, and drilldown on the data in a couple clicks.
                  </p>
                </div>
              </div>

              <div class="feature col d-flex align-items-start">
                <div class="feature-icon d-none d-lg-block mx-1">
                  <FaRegSmileBeam className='icons' />
                </div>
                <div>
                  <h3>Connect with customers</h3>
                  <p>
                    Solve a problem or close a sale in real-time with chat. If no one is available, 
                    customers are seamlessly routed to email without confusion.
                  </p>
                </div>
              </div>

              <div class="feature col d-flex align-items-start">
                <div class="feature-icon d-none d-lg-block mx-1">
                  <FiCommand className='icons' />
                </div>
                <div>
                  <h3>Connect the tools you already use</h3>
                  <p>
                    Explore 100+ integrations that make your day-to-day workflow more 
                    efficient and familiar. Plus, our extensive developer tools.
                  </p>                
                </div>
              </div>

              <div class="feature col d-flex align-items-start">
                <div class="feature-icon d-none d-lg-block mx-1">
                  <TbMessageCircleHeart className='icons' />
                </div>
                <div>
                  <h3>Our people make the difference</h3>
                  <p>
                    We’re an extension of your customer service team, and all of 
                    our resources are free. Chat to our friendly team 24/7 when you need help.
                  </p>                  
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About