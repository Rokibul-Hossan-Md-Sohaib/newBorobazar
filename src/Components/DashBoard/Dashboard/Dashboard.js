import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Sidebar from '../Sidebar/Sidebar';
import sideimg from '../../../images/AllProducts/sidebarimage.png';
import './Dashboard.css'
import Newbar from './Newbar';
const Dashboard = () => {
    return (
        <div className='main-headerz'>
            <div className="container-fluid">
      
          <div className="heading-container">
            <div className="line"></div>
            <h4 className="heading">CHOOSE YOUR BEST ONE</h4>
            <div className="line"></div>
          </div>
                <div className="row">
                    <div className="col-md-6">
                       <Newbar/>
                        {/* <Sidebar /> */}
                    </div>
                    <div className="col-md-6">
                   
                        <AllProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
