import React from 'react';
import ProductShow from './ProductShow';
import imbg from '../../../images/AllProducts/imbg.webp';
import imbg2 from '../../../images/AllProducts/glassim4.png'
import { items } from './RawProducts';

const AllProducts = () => {
    return (
        <section className="container " style={{marginBottom: "50px"}}>
        
            <div className="row">
                <div className="card-deck">
                    {
                        items.map((product, index) => (
                            <ProductShow key={index} products={product} />
                        ))
                    }
                </div>
                {/* <div className="container mb-5">
                    <img
                        style={{ width: "100%", height: "50%", marginLeft: "14px" }}
                        src={imbg2}
                        alt="Product background"
                    />
                </div> */}
                {/* <div className="card-deck">
                    {
                        items.map((product, index) => (
                            <ProductShow key={index} products={product} />
                        ))
                    }
                </div> */}
            </div>
        </section>
    );
};

export default AllProducts;
