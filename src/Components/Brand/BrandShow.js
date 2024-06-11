import React from 'react';
import './BrandShow.css';

const BrandShow = ({ products }) => {
    // Handler for image load error
    const handleImageError = (e) => {
        e.target.src = 'path/to/placeholder/image.jpg'; // Replace with your fallback image path
    };

    return (
        <div className="brand-show-container">
            <div className="brand-show-card align-items-center">
                <img
                    className="photo"
                    src={products.photo}
                    alt={products.name}
                    onError={handleImageError}
                />
            </div>
        </div>
    );
};

export default BrandShow;
