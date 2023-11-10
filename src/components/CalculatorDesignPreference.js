import React, { useState } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { useNavigate, useLocation } from 'react-router-dom';


const CalculatorDesignPreference = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    useLocation();

    const [selectedDesign, setSelectedDesign] = useState(formData.design || '');

    const handleServiceChange = (e) => {
        setSelectedDesign(e.target.value);
    };

    const handleNext = () => {
        if (selectedDesign) {
            setFormData({ ...formData, design: selectedDesign });
            navigate('/calculatorPageNumber');
        } else {
            alert('Please select a design preference before proceeding.');
        }
    };

    const handlePrev = () => {
          navigate({
            pathname: '/calculatorProjectTimeline',
            state: { formData: { ...formData } },
          });
    };

  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>Design Preference</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="preference"
                                id="designPreference1"
                                value="Clean and Minimalistic"
                                checked={selectedDesign === 'Clean and Minimalistic'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference1">
                                Clean and Minimalistic
                            </label>
                        </div>
                    </div> 

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="preference"
                                id="designPreference2"
                                value="Bold and Creative"
                                checked={selectedDesign === 'Bold and Creative'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference2">
                                Bold and Creative
                            </label>
                        </div>
                    </div>

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="preference"
                                id="designPreference3"
                                value="Elegant and Classic"
                                checked={selectedDesign === 'Elegant and Classic'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference3">
                                Elegant and Classic
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="preference"
                                id="designPreference4"
                                value="Modern and Trendy"
                                checked={selectedDesign === 'Modern and Trendy'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference4">
                                Modern and Trendy
                            </label>
                        </div>
                    </div>       

                    <div className="mb-3 bg3 py-3">
                        <div className="m-3 form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="preference"
                                id="designPreference5"
                                value="Other"
                                checked={selectedDesign === 'Other'}
                                onChange={handleServiceChange}
                            />
                            <label className="form-check-label checkbox-text1 mx-2" htmlFor="designPreference5">
                                <p className='mb-0 checkbox-text1'>Other</p>                    
                                <input
                                    type="text"
                                    className="form-control bg3"
                                    id="otherPreference"
                                    placeholder="Please Specify"
                                    name="otherPreference"
                                    value={formData.otherPreference || ''}
                                    onChange={(e) => setFormData({ ...formData, otherPreference: e.target.value })}
                                />                
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

export default CalculatorDesignPreference