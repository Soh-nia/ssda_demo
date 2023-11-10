import React, { useState } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { useNavigate } from 'react-router-dom';

const CalculatorSelectService = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    const [selectedService, setSelectedService] = useState(formData.service || '');

    const handleServiceChange = (e) => {
        setSelectedService(e.target.value);
    };

    const handleNext = () => {
        if (selectedService) {
          setFormData({ ...formData, service: selectedService });
          navigate('/calculatorStatusProject');
        } else {
          alert('Please select a service before proceeding.');
        }
      };

  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Select a Service</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="service"
                                id="service1"
                                value="Entire Project"
                                checked={selectedService === 'Entire Project'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="service1">
                                <p className='mb-0 checkbox-text1'>Entire Project</p>
                                <p className='mt-1 checkbox-text2'>From Design and Development to Deployment and User Experience</p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="service"
                                id="service2"
                                value="Web Development"
                                checked={selectedService === 'Web Development'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="service2">
                                <p className='mb-0 checkbox-text1'>Web Development</p>
                                <p className='mt-1 checkbox-text2'>
                                    Crafting visually stunning and functional websites to captivate your online audience
                                </p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="service"
                                id="service3"
                                value="Mobile App Development"
                                checked={selectedService === 'Mobile App Development'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="service3">
                                <p className='mb-0 checkbox-text1'>Mobile App Development</p>
                                <p className='mt-1 checkbox-text2'>
                                    Designing and developing mobile applications for iOS and Android platforms.
                                </p>
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="my-3 form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="service"
                                id="service4"
                                value="UI/UX Design"
                                checked={selectedService === 'UI/UX Design'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label d-flex flex-column" htmlFor="service4">
                                <p className='mb-0 checkbox-text1'>UI/UX Design</p>
                                <p className='mt-1 checkbox-text2'>
                                    Creating user-friendly interfaces and exceptional user experiences
                                </p>
                            </label>
                        </div>
                    </div>                    
                    

                    <div className='d-flex justify-content-end'>
                        <button type="button" onClick={handleNext} className="btn next-btn rounded-0">Next</button>
                    </div>

                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorSelectService