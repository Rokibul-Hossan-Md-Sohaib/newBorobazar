import React from 'react';
import './ProductShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductShow = ({ products }) => {
    // Add console log to debug props
    console.log(products);

    // Handler for image load error
    const handleImageError = (e) => {
        e.target.src = 'path/to/placeholder/image.jpg'; // Replace with your fallback image path
    };

    return (
        <div className="col-md-4 mb-5">
            <div className="card ">
                <div className="card-header align-items-center" style={{ backgroundColor: "RGB(255, 255, 255)" }}>
                    <img
                        className="photos"
                        src={products.photo}
                        alt={products.name}
                        onError={handleImageError} // Add onError handler
                    />
                </div>
                {/* <div className="card-body">
                    <p>${products.price}</p>
                    <h5>{products.name}</h5>
                    <p className="card-text text-secondary mt-4">{products.quantity}</p>
                </div> */}
            </div>
        </div>
    );
};

export default ProductShow;
