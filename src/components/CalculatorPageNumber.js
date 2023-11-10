import React, { useState } from 'react';
import "./ourworks.css";
import "./projectcalc.css";
import { useNavigate, useLocation } from 'react-router-dom';



const CalculatorPageNumber = ({ formData, setFormData }) => {
    const navigate = useNavigate();
    useLocation();
    const [selectedPageNumber, setSelectedPageNumber] = useState(5);

    const handleRangeChange = (e) => {
        const selectedValue = parseInt(e.target.value);
        if (selectedValue >= 1 && selectedValue <= 100) {
            setSelectedPageNumber(selectedValue);
        }
    };

    const handleNext = () => {
        if (selectedPageNumber) {
            setFormData({ ...formData, pageNumber: selectedPageNumber });
            navigate('/calculatorProjectEstimate', { state: { selectedPageNumber } });
        } else {
            alert('Please select the number of pages before proceeding.');
        }
    };

    const handlePrev = () => {

        navigate({
            pathname: '/calculatorDesignPreference',
            state: { formData: { ...formData } },
        });
    };

    const NumberSelected = selectedPageNumber;

  return (
    <>
        <div className='container pt-5'>
            <p className='service-heading'>How many pages/screens do you have in mind?</p>
            <div className='py-5'>
                <form>
                    <div className="mb-3 py-3 slider-wrapper">
                        <input 
                            type="range"
                            className="form-range" 
                            min="1"
                            max="100"
                            id="customRange"
                            step='1'
                            value={selectedPageNumber}
                            onChange={handleRangeChange}
                        /> 

                        <div className='d-flex justify-content-between'>
                            <div className='justify-content-start range-inputs'>
                                <p>1 - 5 Pages</p>                                
                            </div>

                            <div className='justify-content-start range-inputs'>
                                <p>50 Pages</p>                                
                            </div>

                            <div className='justify-content-start range-inputs'>
                                <p>100+ Pages</p>                                
                            </div>
                        </div>

                        <div className='pageNumber'>
                            <p>You Selected {NumberSelected} Number of Pages</p>
                        </div>
                    </div>                                
      
                    <div className='d-flex justify-content-end'>
                        <button type="button" onClick={handlePrev} className="btn prev-link rounded-0 my-2 mx-3">Go Back</button>
                        <button type="button" onClick={handleNext} className="btn next-btn rounded-0">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

export default CalculatorPageNumber