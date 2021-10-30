import React from 'react'
import Footer from '../Footer';
import UnsignedHeader from '../UnsignedHeader';
import './index.scss';
import homeImg from '../../images/homedark.png';
import leader1 from '../../images/leader1.jpg';
import leader2 from '../../images/leader2.png';
import leader3 from '../../images/leader3.png';
import leader4 from '../../images/leader4.jpg';
import leader5 from '../../images/leader5.png';
import {posts} from '../../Data/index';
import { Progress } from 'reactstrap';
import Post from '../Post';
import placeholder from '../../images/placeholder.jpg'

export default function Home() {
    return (
        <div className='home'>





        {/* header section start */}

           <div className='header'>
           <UnsignedHeader/>
           </div>


         {/* header section end */}













          {/* content section start */}
            
            
            
            <div className="content d-flex justify-content-between ">


                <div>
                <h5 className='my-3'>
                    BUILT BY THE CROWD FOR THE CROWD
                </h5>
                <h1 className='my-3'>
                    The Leading Digital Donations Platform in Egypt
                </h1>
                <h4 className='my-3'>
                The Leading Digital Donations Platform in Egypt
                </h4>

                <button className="btn my-3">
                    Get started
                </button>

                </div>



                <div className='pt-5'>

                <img src={homeImg}  alt="" />

                </div>
                
                
            </div>


             {/* content section end */}


















        {/* posts section start */}


            <div className="explore my-5">
            <h2>
                Explore Posts
            </h2>


            <div className="row">
                {
                    posts.map(post=>{
                        return(
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
                                <Post image={post.image} date={post.date} id={post.id}/>

                            </div>
                            
                        )
                    })
                }
            </div>

                

            </div>


            {/* posts section end */}














            


            {/* doers section start */}


            <div className="doers">
                <h2 className='fw-bold my-5'>
                    Hear it from our doers
                </h2>
                <div className="row ">
                    <div className="col-12 col-md-4  ">
                        <div className="doer m-2 p-5">
                            <h3>
                                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                            </h3>
                            <div className="d-flex mt-4">
                                <img src={placeholder} alt="" />
                                <div className=" ms-2">
                                   <p className='mb-0'>Jane Doe</p> 
                                    <p>
                                     company XYZ -CEO</p> 
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-4  ">
                        <div className="doer m-2 p-5">
                            <h3>
                                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                            </h3>
                            <div className="d-flex mt-4">
                                <img src={placeholder} alt="" />
                                <div className=" ms-2">
                                   <p className='mb-0'>Jane Doe</p> 
                                    <p>
                                     company XYZ -CEO</p> 
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-4  ">
                        <div className="doer m-2 p-5">
                            <h3>
                                "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                            </h3>
                            <div className="d-flex mt-4">
                                <img src={placeholder} alt="" />
                                <div className=" ms-2">
                                   <p className='mb-0'>Jane Doe</p> 
                                    <p>
                                     company XYZ -CEO</p> 
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>



            {/* doers section end */}

















            {/* leaders section start */}


            <div className="leaders  text-center w-100 my-5">
                <h2 className='my-5'>
                    Featured by industry Leaders
                </h2>

                <div className="img-container d-flex justify-content-between flex-wrap">
                <img src={leader1} alt='leader1' />
                <img src={leader2} alt='leader2' />
                <img src={leader3} alt='leader3' />
                <img src={leader4} alt='leader4' />
                <img src={leader5} alt='leader5' />
                </div>
            
                
            </div>


            {/* leaders section end */}










                
                
            {/* footer section start */}

            <Footer backColor={'black'} color={'white'}/>


            {/* footer section end */}
        

        </div>
    )
}
