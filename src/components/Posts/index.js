import React from 'react';
import Footer from '../Footer';
import './index.scss';
import {posts} from '../../Data/index';
import Post from '../Post';
import SignedHeader from '../SignedHeader';
import { Link } from 'react-router-dom';

export default function Posts() {
    return (
        <div className='posts'>





          {/* header start     */}

            <div className='header'>
            <SignedHeader/>
            </div>


            {/* header end     */}









             {/* filters start     */}

        <div className="filters">
            <div className="text-center">

                <h4 className='fw-bold'>
                    Posts
                </h4>
                <h5>
                    Scout. Invest. Repeat
                </h5>
            </div>

        <form>
                 
                 <div class="row">


                   <div class="col-12 col-md-6 col-lg-2 my-2">
                      
                     <input type="text" className="form-control" placeholder="Type to search ..."/>
                   </div>


                   <div className=" col-12 col-md-6 col-lg-2 my-2">
                   <select className="form-control">
                    <option selected>Status</option>
                    <option>...</option>
                    </select>
                     
                   </div>


                   <div class="col-12 col-md-6 col-lg-2 my-2">
                   <select className="form-control">
                    <option selected>Type</option>
                    <option>...</option>
                    </select>
                   </div>


                   <div class="col-12 col-md-6 col-lg-2 my-2">
                   <select className="form-control">
                    <option selected>Most Funded</option>
                    <option>...</option>
                    </select>
                   </div>


                   <div className="col-12 col-md-6 col-lg-2 my-2">
               
                   </div>
                 </div>
               </form>



        </div>

            

              {/* filterrs end     */}









           
            {/* posts start     */}

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


            {/* posts end     */}









            {/* footer start     */}

            <Footer/>

             {/* footer end     */}



        </div>
    )
}
