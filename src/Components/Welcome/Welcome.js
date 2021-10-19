import React from 'react';
import chef from '../../images/chef.jpg'
import image21 from '../../images/image21.webp'
import image22 from '../../images/image22.webp'
import './Welcome.css'

const Welcome = () => {
    return (
        < section className="welcome">
        <div className="container">
            <div className="row ">
                <div className="col-md-8 py-5" >
                  

           <h1 className="">Make your online shop easier <br/>with our mobile app</h1>
           <h5 className="text-secondary">BoroBazar makes online grocery shopping fast and easy. 
           <br/>Get groceries delivered and order the best of seasonal farm fresh food.</h5>
           <div className=" img d-flex ">
               <img className="mr-3" src={image21} alt="" />
               <img src={image22} alt="" />
           </div>
                </div>
                <div className="col-md-4 d-none d-md-block">
                    <img  src={chef} alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Welcome;