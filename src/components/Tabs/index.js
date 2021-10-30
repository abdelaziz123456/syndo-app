import React, { useState } from 'react';
import placeholder from '../../images/placeholder.jpg';
import graph1 from '../../images/graph1.png';
import graph2 from '../../images/graph2.png';

import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './index.scss'
export default function Tabs() {
    const [activeTab, setActiveTab] = useState('1');
    return (
        <div className='tabs'>
            <Nav tabs>
        <NavItem>
          <NavLink className={activeTab == '1' ? 'active tab' : 'tab'} onClick={() => setActiveTab('1')}>
            <p className='fw-bold'>Pitch</p> 
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active tab' : 'tab'} onClick={() => setActiveTab('2')}>
          <p className='fw-bold'>Company</p>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>




        {/* tab content 1 start */}

        <TabPane tabId="1" className='tab-content'>
        <h6 className="fw-bold my-3">
           Post Overview
         </h6>
         <small>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </small>
         <h6 className="fw-bold my-3">
           Post Purpose
         </h6>
         <small>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </small>
          </TabPane>



          {/* tab content 1 end */}










          {/* tab content 2 start */}

        <TabPane tabId="2" className='tab-content'>
         <h6 className="fw-bold my-3">
           About the Company
         </h6>
         <small>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         </small>
         <h6 className="fw-bold my-3">
           Products and Services
         </h6>
         <small>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         </small>
         <h6 className="fw-bold my-3">
           Company Size
         </h6>
         <small>
         11-50 Employees
         </small>
         <h6 className="fw-bold my-3">
           Business Model
         </h6>
         <small>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
         </small>
         <div className='my-3'>
         <img src={placeholder} alt="" width='240'  />

         </div>

         {/* tab content 2 end */}









            {/* traction start */}

         <div className="traction">
            <h6 className="fw-bold mt-5 mb-3">
              Traction
            </h6>
            <div className="d-flex justify-content-between">

              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Number Of Customers</small>
              </div>


              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Active Users</small>
              </div>


              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Potential Users</small>

              </div>
              
              
            </div>
            <h6 className="fw-bold mt-5 mb-3">
              Financial Performance
            </h6>
            <div className="d-flex justify-content-between">

              


              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Sales Turnover</small>
              </div>


              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Gross Profit Margin</small>

              </div>

              <div>
              <p className='h4 fw-bold'>0</p>
              <small>Company Valuation</small>
              </div>
              
              
            </div>
         
         </div>

         {/* traction end */}










        {/* graphs start */}

        <div className="graphs row my-4">
          <div className="col-12 col-md-6">
            <img src={graph1} alt="graph1" />
          </div>
          <div className="col-12 col-md-6">
          <img src={graph2} alt="graph2" />

          </div>

        </div>

        {/* graphs end */}











        {/* key clients start */}
        
        <div className="clients text-center">
          <h6 className='fw-bold'>Key Clients</h6>
          <div className="row my-5">

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Client 1</small>
          </div>

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Client 2</small>
          </div>

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Client 3</small>
          </div>
          </div>

        </div>


        {/* key clients end */}









         {/* Founding team start */}
        
         <div className="clients text-center">
          <h6 className='fw-bold'>Founding Team</h6>
          <div className="row my-5">

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Name</small>
          <small className=' my-3 d-block'>Job Title</small>
          </div>

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Name</small>
          <small className=' my-3 d-block'>Job Title</small>
          </div>

          <div className="col-12 col-md-4">
          <img src={placeholder} alt="" width='150'  />
          <small className='fw-bold my-3 d-block'>Name</small>
          <small className=' my-3 d-block'>Job Title</small>
          </div>
          </div>

        </div>


        {/* founding team end */}










         
          </TabPane>
      </TabContent>
            
        </div>
    )
}
