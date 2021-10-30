import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss';
import avatar from '../../images/avatar.png'

export default function SignedHeader() {
    return (
        <div className='signed-header  d-flex justify-content-between py-3 mb-5'>
        <div>
            <Link to='/'>
            <h1>synd<span>o</span><sub>BETA</sub> </h1>
            </Link>
       
        </div>


        <div className='d-flex user'>
            <div>
                <small className='fw-bold'>Jane Doe</small>
                <Link to='/'>
                <small>Logout</small>
                </Link>
                
            </div>

            <div className='user-img d-flex align-items-center'>
                <img src={avatar} alt="avatar" />
            </div>

        </div>
        
  

    </div>
    )
}
