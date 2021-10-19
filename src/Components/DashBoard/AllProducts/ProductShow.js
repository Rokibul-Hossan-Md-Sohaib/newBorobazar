import React from 'react';
import './ProductShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProductShow = ({products}) => {
    return (
        <div className="col-md-3 mb-5">
        <div className="card shadow-sm">
            <div className="card-header   align-items-center" style={{backgroundColor:"RGB(255, 255, 255)"}}>
                <img className="photo" src={products.photo} alt="" />
                <img className="image" src={products.icon} alt="" />
               
            
            </div>
            <div className="card-body">
            <p >${products.price}</p>
            <h5>{products.name}</h5>
                <p className="card-text text-secondary mt-4">{products.quntity}</p>
            </div>
            
       </div>
       </div>
    );
};

export default ProductShow;