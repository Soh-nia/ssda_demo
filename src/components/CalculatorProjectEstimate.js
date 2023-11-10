import { React, useState, useEffect, useCallback } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { Link, useLocation } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalculatorProjectEstimate = ({ formData }) => {
   
    // To Calculate and Display Project Budget
    const { state } = useLocation();
    const selectedPageNumber = state?.selectedPageNumber || 0;
    const [estimate, setEstimate] = useState(0);

    const calculateEstimate = useCallback(() => {
        if (!formData || isNaN(selectedPageNumber)) {
            return 0;
        }

        let projectPrice = 0;

        // Adjust the base price based on the selected service
        if (formData.service === 'Entire Project') {
            projectPrice += 400000;
        } else if (formData.service === 'Web Development') {
            projectPrice += 200000;
        } else if (formData.service === 'Mobile App Development') {
            projectPrice += 300000;
        } else if (formData.service === 'UI/UX Design') {
            projectPrice += 100000;
        }

        // Adjust the base budget based on the project status
        if (formData.status === 'New Project') {
            projectPrice += 200000;
        } else if (formData.status === 'Existing Project') {
            projectPrice += 100000;
        }

        // Adjust the base budget based on the project timeline
        if (formData.timeline === 'Less than 1 week') {
            projectPrice += 200000;
        } else if (formData.timeline === '1 to 4 weeks') {
            projectPrice += 150000;
        } else if (formData.timeline === '1 to 3 months') {
            projectPrice += 100000;
        } else if (formData.timeline === '3 to 6 months') {
            projectPrice += 50000;
        } else if (formData.timeline === 'Longer than 6 months') {
            projectPrice += 50000;
        }

        // Adjust the base budget based on the project design preference
        if (formData.preference === 'Clean and Minimalistic') {
            projectPrice += 300000;
        } else if (formData.preference === 'Bold and Creative') {
            projectPrice += 400000;
        } else if (formData.preference === 'Elegant and Classic') {
            projectPrice += 250000;
        } else if (formData.preference === 'Modern and Trendy') {
            projectPrice += 350000;
        } else if (formData.preference === 'Other') {
            projectPrice += 200000;
        }

        const pricePerPage = 50000;
        const totalPrice = projectPrice + selectedPageNumber * pricePerPage;
        return totalPrice;
    }, [formData, selectedPageNumber]);

    useEffect(() => {
        console.log("formData:", formData);
        console.log("selectedPageNumber:", selectedPageNumber);

        const calculatedEstimate = calculateEstimate();
        console.log("calculatedEstimate:", calculatedEstimate);

        setEstimate(calculatedEstimate);
    }, [calculateEstimate, formData, selectedPageNumber]);

    //To send estimate to user's email
    const sendEmail = (name, email) => {
        emailjs.send(
            'service_6fx5oug',
            'template_jaryym3',
            {
                email: email,
                to_name: name,
                estimate: `NGN ${estimate}`,
            },
            'edQQH2UmcSI0WKqzm'
        )
        .then(response => {
            toast.success('Email successfully sent, check inbox');
         })
        .catch(error => {
            toast.error('An error occurred. Please try again');
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        sendEmail(name, email);        
    };


  return (
    <>
        <div className='container pt-5'>
            <div className='d-flex'>
                <p className='service-heading'>Rough Estimate of your Project</p>
                <div>
                    <img src='assets/Hand-drawn arrow.png' alt='arrow' className='img-fluid' />
                </div>
            </div> 

            <div className='p-5'>
                <p className='estimate-text1'>Based on your Requirement</p>
                <p className='estimate-text2'>NGN {estimate}</p>
                <p className='estimate-text3 mt-5'>If you need a detailed estimate for your project, 
                we can send it to your email.</p>                
            </div>

            <div className='d-flex'>
                <button 
                className="btn next-btn rounded-0 mx-3"
                data-bs-toggle="modal" data-bs-target="#popUp">
                    Send Estimate to my Email
                </button>
                <Link to="/CalculatorSelectService" className="btn startOver-btn rounded-0">Start Over</Link>
            </div>

            <div className="modal fade" id="popUp" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <p className="modal-text1" id="modalLabel">Email Address</p>
                                <p className="modal-text2">No spam or newsletters.</p>
                            </div>                            
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 modalInput d-flex">  
                                    <BiSolidUserCircle className="modalIcon my-3 mx-1" />      
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder='Enter full name'                                        
                                    />
                                </div>

                                <div className="mb-3 modalInput d-flex">  
                                    <BsEnvelope className="modalIcon my-3 mx-1" />      
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder='maya@sirleaf.com'                                        
                                    />
                                </div>

                                <div className='row'>
                                    <button type="submit" className="btn modalSubmitBtn rounded-0">Submit</button>
                                </div>                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modalCancelBtn rounded-0" data-bs-dismiss="modal">Cancel</button>                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="emailSentToast" class="toast align-items-center top-0 start-50" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="10000" data-autohide="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Email successfully sent, check inbox
                    </div>
                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
       
        </div>
    </>

  )
}

export default CalculatorProjectEstimate