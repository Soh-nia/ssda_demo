import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import "./ourworks.css";

const Pagination = () => {
  return (
    <>
        <div className='py-5 d-flex justify-content-between'>
          <div className='prev'>
            <Link to='/ourWorks' className='d-none d-md-block page-link'>
              <BsArrowLeftShort className='arrow-icon' />
              Previous
            </Link>
          </div>

          <div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item"><Link className="page-link page-box mx-2" to="">1</Link></li>
                <li className="page-item"><Link className="page-link page-box mx-2" to="">2</Link></li>
                <li className="page-item"><Link className="page-link page-box mx-2" to="">3</Link></li>
                <li className="page-item"><Link className="page-link page-box mx-2" to="">...</Link></li>
                <li className="page-item"><Link className="page-link page-box mx-2" to="">4</Link></li>
                <li className="page-item"><Link className="page-link page-box mx-2" to="">5</Link></li>
              </ul>
            </nav>
          </div>

          <div className='next'>
            <Link to='/ourWorks' className='d-none d-md-block page-link'>Next
              <BsArrowRightShort className='arrow-icon' />
            </Link>
          </div>
        </div>
    </>
  )
}

export default Pagination