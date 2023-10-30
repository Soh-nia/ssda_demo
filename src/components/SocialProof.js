import React from 'react';
import "./Home.css";


const SocialProof = () => {
  return (
    <>
        <section className='bg-371863 d-padding1'>
            <div className='container text-center'>
                <p className='socialProof-text'>We’ve built software's  for</p>
                <div className='socialProof-logos row '>
                    <div className='logo1 col-6 col-md-2'>
                    <img src='assets/Boltshift.png' alt='logo1' className='img-fluid' />
                    </div>

                    <div className='logo2 col-6 col-md-2'>
                    <img src='assets/Lightbox.png' alt='logo2' className='img-fluid' />
                    </div>

                    <div className='logo3 col-6 col-md-2'>
                    <img src='assets/Featherdev.png' alt='logo3' className='img-fluid' />
                    </div>

                    <div className='logo4 col-6 col-md-2'>
                    <img src='assets/Spherule.png' alt='logo4' className='img-fluid' />
                    </div>

                    <div className='logo5 col-6 col-md-2'>
                    <img src='assets/Globalbank.png' alt='logo5' className='img-fluid' />
                    </div>

                    <div className='logo6 col-6 col-md-2'>
                    <img src='assets/Nietzsche.png' alt='logo6' className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SocialProof;