import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


export default function UnsignedHeader() {

        
    return (
        <div className='unsigned-header  d-flex justify-content-between py-3 mb-5'>
            <div>
                <Link to='/'>
                <h1>synd<span>o</span><sub>BETA</sub> </h1>
                </Link>
           
            </div>


            <div className='d-flex links'>
                <Link to='/posts' >Posts</Link>
                <Link to='#' >Testimonials</Link>
                <Link to='#' >Login</Link>
                <Link to='#' >Get Started</Link>

            </div>
            
      

        </div>
    )

}
