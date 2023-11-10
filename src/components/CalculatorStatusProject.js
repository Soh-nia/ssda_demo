import React, { useState } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { useNavigate, useLocation } from 'react-router-dom';


const CalculatorStatusProject = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    useLocation();

    const [selectedStatus, setSelectedStatus] = useState(formData.status || '');

    const handleServiceChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleNext = () => {
        if (selectedStatus) {
          setFormData({ ...formData, status: selectedStatus });
          navigate('/calculatorProjectTimeline');
        } else {
          alert('Please select a staus before proceeding.');
        }
    };

    const handlePrev = () => {
          navigate({
            pathname: '/calculatorSelectService',
            state: { formData: { ...formData } },
          });
    };

  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Tell us the Status of the Project</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="status"
                                id="status1"
                                value="New Project"
                                checked={selectedStatus === 'New Project'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="status1">
                                <p className='mb-0 checkbox-text1'>New Project</p>
                                <p className='mt-1 checkbox-text2'>If you have a brand new project that requires a budget estimate, select this option</p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="status"
                                id="status2"
                                value="Existing Project"
                                checked={selectedStatus === 'Existing Project'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="status2">
                                <p className='mb-0 checkbox-text1'>Existing Project </p>
                                <p className='mt-1 checkbox-text2'>
                                    If you're already working on a project and need additional  support, select this option
                                </p>
                            </label>
                        </div>
                    </div>                   
                                       
                    <div className='d-flex justify-content-end'>
                        <button type="button" onClick={handlePrev} className="btn prev-link rounded-0 my-2 mx-3">Go Back</button>
                        <button type="button" onClick={handleNext} className="btn next-btn rounded-0">Next</button>
                    </div>                   
                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorStatusProject