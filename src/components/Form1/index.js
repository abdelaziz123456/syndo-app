import React from 'react';
import { Input,FormGroup } from 'reactstrap';
import Summary from '../Summary';

export default function Form1(props) {
    return (
        <div>
             <div className="row m-3">

              



              <div className="col-12 col-lg-6 my-3">
              <h6 className='fw-bold mb-4'>
              Investment Request
              </h6>
              <small className="d-block my-1">
                Current Available Balance
              </small>
              <small className="d-block fw-bold my-1">
                50,000
              </small>
              <small className="d-block my-1">
              Amount (required)
              </small>

              <div className="range">
              <Input
              id="exampleRange"
              name="range"
              type="range"
              className='w-100 range'
              />

              <div className="d-flex justify-content-between">
              <small className="d-block my-1">
              500 EGP
              </small>
              <small className="d-block my-1">
              100k EGP
              </small>
              </div>

              <small className="d-block my-1">
              Expected ROI
              </small>

              <small className="d-block my-1">
              Risk Disclaimer
              </small>

              <small className="d-block mt-1 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </small>


              <FormGroup check>
              <Input type="checkbox" />
              <small className="d-block my-1">
              by clicking <b>Next</b> you agree to syndo's <b>terms</b>
              </small>
              </FormGroup>


              </div>




              </div>





              <div className="col-12 col-lg-6 d-flex justify-content-center  my-3">
                  <Summary/>
              </div>

              </div>

              <div className="d-flex justify-content-center buttons my-5">
            <button onClick={props.toggle} className="btn fw-bold">
              Cancel
              </button>
              <button onClick={props.goNext} className="btn invest fw-bold">
               Next
              </button>
          </div>

        </div>
    )
}
