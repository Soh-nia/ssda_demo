import React, { useState } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { useNavigate, useLocation } from 'react-router-dom';


const CalculatorProjectTimeline = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    useLocation();

    const [selectedTimeline, setSelectedTimeline] = useState(formData.timeline || '');

    const handleServiceChange = (e) => {
        setSelectedTimeline(e.target.value);
    };

    const handleNext = () => {
        if (selectedTimeline) {
          setFormData({ ...formData, timeline: selectedTimeline });
          navigate('/calculatorDesignPreference');
        } else {
          alert('Please select a timeline before proceeding.');
        }
    };

    const handlePrev = () => {
          navigate({
            pathname: '/calculatorStatusProject',
            state: { formData: { ...formData } },
          });
    };

  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Project Timeline</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="timeline"
                                id="projectTimeline1"
                                value="Less than 1 week"
                                checked={selectedTimeline === 'Less than 1 week'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline1">Less than 1 week
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="timeline"
                                id="projectTimeline2"
                                value="1 to 4 weeks"
                                checked={selectedTimeline === '1 to 4 weeks'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline2">
                             1 to 4 weeks
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="timeline"
                                id="projectTimeline3"
                                value="1 to 3 months"
                                checked={selectedTimeline === '1 to 3 months'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline3">
                                1 to 3 months
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="timeline"
                                id="projectTimeline4"
                                value="3 to 6 months"
                                checked={selectedTimeline === '3 to 6 months'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline4">
                                3 to 6 months
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="timeline"
                                id="projectTimeline5"
                                value="Longer than 6 months"
                                checked={selectedTimeline === 'Longer than 6 months'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="projectTimeline5">
                                Longer than 6 months
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

export default CalculatorProjectTimeline