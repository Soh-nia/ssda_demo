import React from 'react'
import "./ourworks.css";
import "./blog.css";
import { Link } from 'react-router-dom';
import { IoCopyOutline } from 'react-icons/io5';
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';



const BlogPost = () => {
  return (
    <>
        <div className='container mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className='breadcrumb-bloglink' to="/ourWorks">Blogs</Link></li>
                    <li className="breadcrumb-item breadcrumb-link2" aria-current="page">Blog Post</li>
                </ol>
            </nav>
        </div>

        <div className='blogPost-container'>
            <div className='padding1 blogPost-header'>
                <div className='padding2'>
                    <div>
                        <p className='blogPost-subheading'>Design</p>
                        <p className='blogPost-heading'>Wireframing</p>
                        <p className='blogPost-supportText'>
                            How do you create compelling presentations that wow your 
                            colleagues and impress your managers? Here’s how to get started.
                        </p>
                    </div>

                    <div>
                        <p className='blogPost-author mb-0'>Olivia Rhye</p>
                        <p className='blogPost-date'>20 Jan 2022</p>
                    </div>
                </div>

                <div className='container'>
                    <div className='blogPost-img padding2'>
                        <img src='assets/image12.png' alt='blog' className='img-fluid' />
                    </div>
                </div>
            </div>

            <div className='blogPost-section container'>
                <div className='padding2 blogPost-details'>
                    <div className='container'>
                        <p className='first-paragraph pb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo 
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. 
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <div className='py-5 border-top border-bottom'>
                            <p className='title'>Introduction</p>
                            <p className='first-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo 
                                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. 
                                Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <div className='container'>
                                <div className='padding2'>
                                    <img src='assets/image13.png' alt='blog' className='img-fluid' />
                                    <figcaption>Image courtesy of Scott Webb via Pexels</figcaption>
                                </div>                                
                            </div>
                            <p className='first-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo 
                                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. 
                                Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <p className='title'>Software and tools</p>
                            <p className='first-paragraph'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo 
                                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. 
                                Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                            </p>
                            <div className='container'>
                                <div className='padding2'>
                                    <img src='assets/image14.png' alt='blog' className='img-fluid' />
                                    <figcaption>Image courtesy of Leon via Unsplash</figcaption>
                                </div>                                
                            </div>  
                            <div className='conclusion mt-5'>
                                <p className='title'>Conclusion</p>
                                <p className='first-paragraph'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                                    ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo 
                                    massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. 
                                    Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                                </p>
                            </div>                  
                        </div>

                        <div className='categories pt-5'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='d-flex justify-content-center'>
                                        <span className="badge rounded-pill mx-2 badge-blue">Product</span>
                                        <span className="badge rounded-pill mx-2 badge-red">Tools</span>
                                        <span className="badge rounded-pill mx-2 badge-red">SaaS</span>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='d-flex justify-content-center'>
                                        <Link to="/blogPost" className='btn blog-copy me-3'><IoCopyOutline className='me-2' />Copy link</Link>
                                        <Link to="/blogPost" className='btn blog-social me-3'><BsTwitter /></Link>
                                        <Link to="/blogPost" className='btn blog-social me-3'><BsFacebook /></Link>
                                        <Link to="/blogPost" className='btn blog-social me-3'><BsLinkedin /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='padding1'>
                <div className='padding2'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div>
                                <p className='latestBlog-subheading'>Our blog</p>
                                <p className='latestBlog-heading'>Lastest blog posts</p>
                                <p className='latestBlog-supportText'>
                                Tool and strategies modern teams need to help their companies grow.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <Link to="/blog" className='latestblog-btn btn btn-lg rounded-2'>
                                View all posts
                            </Link>
                        </div>
                    </div>

                    <div className='blog-container'>
                        <div className='row mt-5'>
                            <div className='col-md-4'>              
                            <div className='blog-img'>
                                <img src='assets/image4.png' alt='blog' className='img-fluid'/>
                            </div>

                            <div className='blog-post mt-3'>
                                <p className='blog-subheading mb-1'>Design</p>
                                <Link to="/blogPost" className='blogPost-link'>
                                <div className='d-flex justify-content-between'>
                                    <p className='blog-heading'>UX review presentations</p>
                                    <FiArrowUpRight className='blog-icon' />
                                </div>
                                </Link>                
                                <p className='blog-details'>
                                How do you create compelling presentations that wow your colleagues 
                                and impress your managers?
                                </p>
                                <div className='author'>
                                <p className='blog-author mb-0'>Olivia Rhye</p>
                                <p className='blog-date'>20 Jan 2022</p>
                                </div>                
                            </div>
                            </div>

                            <div className='col-md-4'>
                            <div className='blog-img'>
                                <img src='assets/image5.png' alt='blog' className='img-fluid'/>
                            </div>

                            <div className='blog-post mt-3'>
                                <p className='blog-subheading mb-1'>Product</p>
                                <Link to="/blogPost" className='blogPost-link'>
                                <div className='d-flex justify-content-between'>
                                    <p className='blog-heading'>Migrating to Linear 101</p>
                                    <FiArrowUpRight className='blog-icon' />
                                </div>
                                </Link>
                                <p className='blog-details'>
                                Linear helps streamline software projects, sprints, 
                                tasks, and bug tracking. Here’s how to get started.
                                </p>
                                <div className='author'>
                                <p className='blog-author mb-0'>Phoenix Baker</p>
                                <p className='blog-date'>19 Jan 2022</p>
                                </div>                
                            </div>
                            </div>

                            <div className='col-md-4'>
                            <div className='blog-img'>
                                <img src='assets/image6.png' alt='blog' className='img-fluid'/>
                            </div>

                            <div className='blog-post mt-3'>
                                <p className='blog-subheading mb-1'>Building your API Stack</p>
                                <Link to="/blogPost" className='blogPost-link'>
                                <div className='d-flex justify-content-between'>
                                    <p className='blog-heading'>UX review presentations</p>
                                    <FiArrowUpRight className='blog-icon' />
                                </div>
                                </Link>
                                <p className='blog-details'>
                                The rise of RESTful APIs has been met by a rise in tools 
                                for creating, testing, and managing them.
                                </p>
                                <div className='author'>
                                <p className='blog-author mb-0'>Lana Steiner</p>
                                <p className='blog-date'>18 Jan 2022</p>
                                </div>                
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

export default BlogPost