import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom'

export default function Post(props) {
    return (
        <div className='post mx-2 my-4'>

            <div className='img-div'>
                
                <img src={props.image}  className='img'/>
            </div>



            <div className=" p-2">
                <div className="d-flex justify-content-between">
                <small className='fw-bold'>
                Post Title
                </small>
                <small>Till {props.date}</small>
                </div>

                <small >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>

            <div className="d-flex justify-content-between align-items-center bar">

            <progress  value="60" max="100" >

                </progress>


                <small className="text-primary ">60%</small>
            </div>
                     
            </div>



            <div className="details  d-flex justify-content-between">
                <ul>
                    <li>Funding Goal</li>
                    <li>1,000,000</li>
                    <li>Total Invested</li>
                    <li>EGP 500,000</li>
                </ul>
                <ul>
                    <li>interested rate</li>
                    <li>12%</li>
                    <li>investors</li>
                    <li>5</li>
                </ul>
                <ul>
                    <li>Tenor</li>
                    <li>12 months</li>
                    <li>skin in the game</li>
                    <li>5%</li>
                </ul>
                
            </div>

            <div className="d-flex p-2">
                <Link to={'/postdetails/'+props.id}>
                <button className="btn btn-sm me-5">
                    <small>Loan</small>  
                </button>
                </Link>
                
                <Link to={'/postdetails/'+props.id}>
                <button className="btn btn-sm ">
                    <small>Industry</small>  
                </button>
                </Link>
            </div>




       

    </div>
    )
}
