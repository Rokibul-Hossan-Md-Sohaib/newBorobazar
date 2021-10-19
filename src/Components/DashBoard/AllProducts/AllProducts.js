import React from 'react';
import ProductShow from './ProductShow';
import imbg from '../../../images/AllProducts/imbg.webp'
import { items } from './RawProducts';

const AllProducts = () => {
    return (
        <section className="container ">
        <div className="row ">
            <div className="card-deck ">
                {
                  items.map(products =><ProductShow products={products}/>)
                }
            </div>
                <div className="container mb-5" >
                <img style={{width:"98%" ,marginLeft:"14px"}} src={imbg} alt="" />
                </div>
                <div className="card-deck ">
                {
                  items.map(products =><ProductShow products={products}/>)
                }
            </div>
            </div>
       </section>
    );
};

export default AllProducts;