import React from 'react';
import Summary from '../Summary';
import { Input,FormGroup } from 'reactstrap';


export default function Form2(props) {
    return (
        <div>
             <div className="row m-3">

              



              <div className="col-12 col-lg-6 my-3 d-flex flex-column">
              
              <h6 className="fw-bold">
                 Investment Request
             </h6>
             <small>
                 investment Amount
             </small>
             <small className='my-1'>
                 500 EGB
             </small>
              
              <small className='my-2'>
                  please enter your card details to secure your investment. <br />
                  Cash will only be deducted on campaign completion
              </small>

                <div className="my-1">
                <small className='my-1'>
                 Cardholder name
             </small>
             <input type="text" className="form-control" value='John Doe' />

                </div>

                <div className="my-1">
                <small className='my-1'>
                 Card number
             </small>
             <input type="password" className="form-control" value='John Doe' />

                </div>


                <div className="my-1">
                <small className='my-1'>
                 Cardholder name
             </small>
             <input type="text" className="form-control" value='12/23' />

                </div>


                <div className="my-1">
                <small className='my-1'>
                 CVV
             </small>
             <input type="password" className="form-control" value='Joh' />

                </div>

                <div class=" my-2">
                    <input type="checkbox" /> 
                    <small className='ms-2'>
                            Save card for future investments
                    </small>
                </div>


                <div class=" my-2">
                    <input type="checkbox" /> 
                    <small className='ms-2'>
                            By clicking <b>invest</b> you agree to syndo's <b>terms</b>
                    </small>
                </div>
              


              




              </div>





              <div className="col-12 col-lg-6 d-flex justify-content-center  my-3">
                  <Summary/>
              </div>

              <div className="d-flex justify-content-center buttons my-5">
            <button onClick={props.goPrevious} className="btn fw-bold">
              Back
              </button>
              <button onClick={props.goNext} className="btn invest fw-bold">
               Invest 500 EGB
              </button>
                </div>

              </div>

        </div>
    )
}
