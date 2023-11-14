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

      <div className='padding1 container'>
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

        <div className='padding1'>
          <div className='container'>
            <div className='px-5'>
              <p className='projectContent-heading'>What Is Project Cost Estimation?</p>
              <p className='projectContent'>
                Project Cost Estimation in the realm of software development is the art and science of predicting the financial 
                investment required to bring a digital vision to life. It's the compass that guides businesses through the intricate
                terrain of budgeting for software projects.<br/>
                <br/>
                Imagine it as the roadmap that foretells the financial landscape of turning innovative ideas into functional, 
                cutting-edge software solutions. This process involves a meticulous evaluation of various factors, such as the scope of 
                the project, required resources, development timeframes, and the intricacies of the desired features.<br /> 
              </p>
              <div className='container'>
                <div className='padding2 py-3'>
                  <img src='assets/image5.png' alt='image5' className='img-fluid' />
                </div>              
              </div>
              <p className='projectContent'>
                Project Cost Estimation is not merely a number; it's a strategic approach that empowers businesses to make informed decisions, 
                ensuring that the journey from concept to code aligns seamlessly with fiscal realities. It is the cornerstone of financial planning in 
                the digital realm, a critical element that helps stakeholders navigate the evolving landscape of software development with confidence and 
                foresight. In the intricate dance of creativity and constraints, Project Cost Estimation takes center stage, enabling businesses to turn their 
                digital aspirations into tangible, budget-conscious realities.
              </p>
              <p className='projectContent-subheading'>
                What Is a Project Estimate?
              </p>
              <p className='projectContent'>
                A Project Estimate is the financial heartbeat of a venture, a calculated projection that serves as the financial 
                compass guiding the trajectory of a project from conception to completion. In the dynamic universe of project 
                management, an estimate is the insightful prediction of the resources, time, and costs required to transform an 
                idea into a tangible reality.<br/>
                <br/>
                More than a numerical figure, a Project Estimate is a strategic tool that empowers project stakeholders to 
                navigate the labyrinth of uncertainties with confidence. It is the groundwork for informed decision-making, 
                ensuring that projects align harmoniously with financial expectations. In the symphony of project execution, a 
                well-crafted estimate is the score that harmonizes aspirations with fiscal realities, fostering a cohesive and 
                effective journey from ideation to implementation. 
              </p>
              <p className='projectContent-subheading'>
                Types of Project Costs
              </p>
              <div className='projectContent'>
                <ul>
                  <li><strong>Direct Costs: </strong>Explicitly tied to the project, such as labor, materials, and equipment.</li>
                  <li><strong>Indirect Costs: </strong>Incurred but not directly attributable, like overhead expenses and administrative costs.</li>
                  <li><strong>Fixed Costs: </strong>Unchanging expenses irrespective of project scale, e.g., rent or salaries.</li>
                  <li><strong>Variable Costs: </strong>Fluctuate with project volume, such as additional labor or materials.</li>
                  <li><strong>Operating Costs: </strong>Ongoing expenses to keep the project running, like utilities and maintenance.</li>
                  <li><strong>Contingency Costs: </strong>Reserved funds for unforeseen events or risks.</li>
                  <li><strong>Capital Costs: </strong>Investment in assets with long-term benefits, like software licenses or equipment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
      </div>      
    </>

  )
}

export default ProjectCalc