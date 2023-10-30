import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { SlGlobe } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
import { FaBehance } from 'react-icons/fa';


const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md bg-white rounded sticky-top border-bottom py-2" aria-label="navbar">
            <div className="container">
                <div className='col-md-1'>
                    <Link className="navbar-brand" to="/">
                        <img src='assets/logo.png' className='logo' alt='logo' />
                    </Link>
                </div>              

                <button className="navbar-toggler collapsed nav-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" 
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse d-lg-flex collapse" id="navbar">              
                    <ul className="navbar-nav col-lg-10 justify-content-lg-center">
                        <li className='nav-item' key="home">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className='nav-item' key="aboutUs">
                            <Link className="nav-link" to="/aboutUs">About Us</Link>
                        </li>

                        <li className="nav-item" key="ourWorks">
                            <Link className="nav-link" to="/ourWorks">Our Works</Link>
                        </li>

                        <li className="nav-item" key="blog">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>

                        <li className="nav-item" key="projectCalc">
                            <Link className="nav-link" to="/projectCalculator">Project Calculator</Link>
                        </li>

                        <li className="nav-item" key="contact">
                            <Link className="nav-link" to="/contactUs">Contact Us</Link>
                        </li>                        
                    </ul>

                    <div className="d-md-flex col-lg-2 justify-content-md-end">
                        <Link className="navbar-icons mx-3" to="/">
                            <FaBehance />
                        </Link>

                        <Link className="navbar-icons mx-3" to="/">
                            <SlGlobe />
                        </Link>

                        <Link className="navbar-icons mx-3" to="/">
                            <BsInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar