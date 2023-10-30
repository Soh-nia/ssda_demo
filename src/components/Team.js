import React from 'react';
import "./Home.css";

const Team = () => {
  return (
    <>
        <div className='d-padding1 container'>            
            <div className='team-heading-container'>
                <p className='team-subheading'>OUR TEAM</p>
                <p className='team-heading'>Meet our Amazing Team</p>
                <p className='team-subtext'>Our philosophy is simple — hire 
                a team of diverse, passionate people and foster a culture that empowers 
                you to do your best work.
                </p>
            </div>
            
            <div className="album py-5">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col-md-8">
                    <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                    <div className="mt-5 p-5">
                        <div className='attribution-card p-2 mt-5'>  
                        <p className='name'>Marvin McKinney</p>
                        <p className='role'>Founder & CEO</p>
                        </div>                      
                    </div>
                    </div>                 
                </div>

                <div className='col-md-4'>
                    <div className='row row-cols-1 g-3'>
                    <div className="col">
                        <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                        <div className="mt-5 p-5">
                            <div className='attribution-card p-2 mt-5'>
                            <p className='name'>Robert Fox</p>
                            <p className='role'>Engineering Manager</p>
                            </div>                        
                        </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                        <div className="mt-5 p-5">
                            <div className='attribution-card p-2 mt-5'>
                            <p className='name'>Dianne Russell</p>
                            <p className='role'>Product Manager</p>
                            </div>                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                    <div className="mt-5 p-5">
                        <div className='attribution-card p-2 mt-5'>
                        <p className='name'>Cody Fisher</p>
                        <p className='role'>UI Designer</p>
                        </div>                      
                    </div>
                    </div>                 
                </div>

                <div className="col-md-4">
                    <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                    <div className="mt-5 p-5">
                        <div className='attribution-card p-2 mt-5'>
                        <p className='name'>Leslie Alexander</p>
                        <p className='role'>Backend Developer</p>
                        </div>                      
                    </div>
                    </div>                 
                </div>

                <div className="col-md-4">
                    <div className="card card-cover h-100 card-bg rounded-1 shadow-sm">
                    <div className="mt-5 p-5">
                        <div className='attribution-card p-2 mt-5'>
                        <p className='name'>Kristin Watson</p>
                        <p className='role'>Product Designer</p>
                        </div>                      
                    </div>
                    </div>                 
                </div>     
                </div>
            </div>
        </div>
    </>

  )
}

export default Team;