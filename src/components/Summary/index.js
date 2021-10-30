import React from 'react';
import './index.scss'

export default function Summary() {
    return (
        <div className='summary  p-3  text-center'>
            <small className='fw-bold '>
                Post Summary
            </small>
            <div className='ms-3 d-flex flex-column align-items-start'>
                <small>
                    post
                </small>
                <small className='fw-bold my-2'>
                    post Title
                </small>
                <small >
                    Tenor
                </small>
                <small className='fw-bold my-2' >
                    2 months
                </small>
                <small >
                    Total raised
                </small>
                <small  className='fw-bold my-2'>
                    50,000 EGP (40%) of 250,000 EGP
                </small>
                <small >
                    expected Net ROI
                </small>
                <small  className='fw-bold my-2'>
                    2%
                </small>
            </div>
        </div>
    )
}
