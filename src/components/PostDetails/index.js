import React,{useState} from 'react'
import Footer from '../Footer'
import SignedHeader from '../SignedHeader';
import './index.scss';
import { posts } from '../../Data/index';
import Post from '../Post';
import placeholder from '../../images/placeholder.jpg'
import { Facebook,  Instagram, Language, LinkedIn } from '@material-ui/icons';
import Tabs from '../Tabs/index';
import investor from '../../images/investor.png';
import syndo from '../../images/syndo.png';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvestModal from '../InvestModal';

export default function PostDetails(props) {
   
    const post = posts.filter((post)=>post.id==props.match.params.id);
    const ourPost=post[0];

    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
    
    
    return (
        ourPost ?




        <div className='post-details'>
            {/* header start */}
            <div className='header'>
            <SignedHeader/>
            </div>
            
            {/* header end */}

            
           

            




            {/* content start */}

            <div className="content row">

                <div className="col-12 col-md-8">

                    <div className='title'>
                    <p >
                    Home <span>&gt;</span> Posts <span>&gt;</span> <b>Post Title</b> 
                    </p>

                    </div>
   
                    <img src={placeholder} alt="" width='120'  />
                    <h4 className='fw-bold my-3'>
                        Post Title
                    </h4>

                    <h5 className='my-4'>
                        100,000 EGP raised
                    </h5>

                    <div className="d-flex btns">
                        <button className="btn">
                            Industry
                        </button>
                        <button className="btn">
                            Loan
                        </button>
                    </div>

                    <div className="icons d-flex my-3">
                        <span>
                        <Language fontSize='small'/>
                        </span>
                        <span>
                        <Facebook fontSize='small'/>
                        </span>

                        <span>
                        <Instagram fontSize='small'/>
                        </span>
                        
                        <span>
                        <LinkedIn fontSize='small'/>
                        </span>                  
                        
                    </div>
                    <button className="btn" onClick={toggle}>
                        Invest Now
                    </button>


                

            
            <div >

                <InvestModal modal={modal}  toggle={toggle}/>

                </div>
                
                </div>

                <div className="col-12 col-md-4">
                   <Post  image={ourPost.image} id={ourPost.id} date={ourPost.date}/>
                   
                </div>

            </div>

            
           {/* content end */}














           {/* tabs start */}

           <div className="tabs-section row my-3">

                <div className="col-12 col-md-8">
                    <Tabs/>
                </div>

                <div className="col-12 col-md-4 my-5">
                    <div className='d-flex justify-content-center'>
                        <img src={investor} alt="investor" width='250' />
                    </div>

                    <div className='d-flex justify-content-center my-4'>
                    <img src={syndo} alt="investor" width='250' />
                    </div>
                </div>

            </div>


           {/* tabs start */}










            {/* footer start */}
            <Footer/>
            {/* footer end */}



        </div> : <div></div>
    )
}
