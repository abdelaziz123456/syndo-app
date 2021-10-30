import React, { useState } from 'react';
import './index.scss'

import { Modal, ModalBody  } from 'reactstrap';
import Form1 from '../Form1';
import Form2 from '../Form2';
import Form3 from '../Form3';

export default function InvestModal(props) {
  const [component,setComponent]=useState(1);

  function goNext(){
    if(component<3){
        setComponent(component+1)
    }
    
  }

  function goPrevious(){
    if(component>1){
      setComponent(component-1)
  }
  }

    return (
     
        
<div className='invest-modal'>
  


      <Modal isOpen={props.modal} toggle={props.toggle} centered={true}  style={{maxWidth: '1200px', width: '80%'}}>
          
          <ModalBody className={'invest-content'}>
            <div className='d-flex justify-content-end  '>
              <button className="btn" onClick={props.toggle} size={props.size ? props.size : 'xl'}>
                 <h5 >X</h5> 
              </button>
            </div>

            {component==1 && <Form1 goNext={goNext} toggle={props.toggle}/>}
            {component==2 && <Form2 goNext={goNext} goPrevious={goPrevious}/>}
            {component==3 && <Form3 toggle={props.toggle} setComponent={setComponent}/>}
           
          </ModalBody>


         

          
        </Modal>
     </div>
            
      
    )
}
