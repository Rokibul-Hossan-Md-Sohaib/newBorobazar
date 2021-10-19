import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
 
    return (
        <div>
            <div  className="container-fluid row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <h4>All Products</h4>
                  <AllProducts/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;