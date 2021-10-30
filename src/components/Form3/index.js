import React from 'react';
import './index.scss'

export default function Form3(props) {
    return (
        <div className="form3 d-flex flex-column align-items-center  m-3">

         <div className=" content text-center d-flex flex-column  align-items-start">
               <h6 className="fw-bold align-self-center">
                   Thank You !
               </h6>

               <small className='my-3 d-block'>
                   your investment request is createdd successfully
               </small>

               <small className='mt-3 d-block'> 
                   investment Ref.
                </small>
              <small className='mb-3 d-block'>
                <b>#SYINV000C001</b>
              </small>


              <small className='mt-3 d-block'> 
                   investment Amountment
                </small>
              <small className='mb-3 d-block'>
                <b>500 EGP</b>
              </small>
            

              <small className='mt-3 d-block'> 
                   Post 
                </small>
              <small className='mb-3 d-block'>
                <b>Post Title</b>
              </small>


              <small className='mt-3 d-block'> 
                   investment Agreements
                </small>
                <ins className='mb-3 d-block'>
                <b>Download here</b>
              </ins>
              


              <small className='my-3 d-block'> 
                   Investment amount will be deducted automatically on post completion , you can cancel your investment before completion from <ins>here</ins> 
                </small>
         
         


         




         </div>





       

         <div className="d-flex justify-content-center buttons my-5">
       
         <button  onClick={()=>{
        props.setComponent(1);
        props.toggle()}} className="btn invest fw-bold">
          Close
         </button>
     </div>

        

   </div>
    )
}
