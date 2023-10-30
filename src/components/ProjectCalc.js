import React from 'react';
import "./contact.css";
import "./ourworks.css";
import "./projectcalc.css";
import { Link } from 'react-router-dom';

const ProjectCalc = () => {
  return (
    <>
      <div className='padding1 bg1'>
        <div className='container'>
          <div>
            <p className='secOne-subheading'>Budgeting Made Simple</p>
            <p className='secOne-heading'>Project Calculator</p>
          </div>
          <p className='secOne-supportText'>
            Choose a Service and Allow our Calculator to Craft Your Project's Budget
          </p>
        </div>
      </div>

      <div className='padding1'>
        <div className='padding2'>
            <p className='project-heading pb-3'>Introducing the Project Budget Estimator</p>
            <p className='border-top py-5 project-text'>
              Welcome to our Project Budget Estimator, designed to simplify the budgeting process 
              for your unique projects. In just a few easy steps, we'll tailor an accurate budget to 
              your specific needs. Start by telling us about your project type and goals, and we'll 
              guide you through the rest. Your budget estimate is moments away – click "Let's Get 
              Started" to begin with confidence.
            </p>
            <p className='project-subheading'>Get Started</p>
            <p className='project-text'>
              Let's get started by exploring the details of your project. 
              It's quick, easy, and will save you time in the long run. Begin 
              the process by telling us about your project type and goals. We'll 
              guide you through the rest, step by step.
            </p>
            <div>
              <Link to="/calculatorSelectService" className="btn btn-lg project-btn rounded-0">Let's Get Started</Link>
            </div> 
        </div>          
      </div>

      <div className='padding1'>
        <div className='container'>
          <div className='padding2'>
            <p className='projectContent-heading'>What Is Project Cost Estimation?</p>
            <p className='projectContent'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi 
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam 
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At 
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
              volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce 
              augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel 
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <div className='container'>
              <div className='padding2 py-3'>
                <img src='assets/image5.png' alt='image' className='img-fluid' />
              </div>              
            </div>
            <p className='projectContent'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi 
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam 
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At 
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
              volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce 
              augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel 
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <p className='projectContent-subheading'>
              What Is a Project Estimate?
            </p>
            <p className='projectContent'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi 
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam 
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At 
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
              volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce 
              augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel 
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <p className='projectContent-subheading'>
              Types of Project Costs
            </p>
            <p className='projectContent'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi 
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam 
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At 
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
              volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce 
              augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel 
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
            <p className='projectContent'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi 
              eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam 
              enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At 
              feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in 
              volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce 
              augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel 
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProjectCalc