import React from 'react';
import './index.scss';


export default function Footer(props) {
    return ( 
        <div className="footer  mt-5">

                <div  className=' top-section    d-flex justify-content-between '>

                <div >
                <h1>synd<span>o</span> </h1>
                <h6>BY THE CROWD FOR THE CROWD</h6>
                </div>


                <div >
                
                </div>

                <div className="d-flex justify-content-between ">
                <div className='mx-2 fw-bold'>
                    Products
                    </div>
                <div className='mx-2'>
                    <ul >
                        <li className='fw-bold'>Company</li>
                        <li>About us</li>
                        <li>Risk</li>
                    </ul>
                    </div>
                <div className='mx-2'>
                <ul >
                        <li className='fw-bold'>Resources</li>
                        <li>How It Works</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                </div>

                <div>
                    
                </div>

                
                

                

                </div>

                <hr style={{height:'6'}}  />
                

               <div className="bottom-section d-flex justify-content-between py-2">
                   <div>    
                       <ul className='d-flex' style={{listStyle:'none'}}>
                           <li>&copy; syndo 2021.All Rights Reserved</li>
                           <li>Privacy Policy</li>
                           <li>Legal Terms</li>
                       </ul>

                   </div>
                   <div>
                   EN &#9660;

                   </div>
                   
               </div>



                

                

        </div>
        
    )
}
