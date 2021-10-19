import React from 'react';
import './CardInform.css'

const CardInform = ({data}) => {

    return (
        <div className="col-md-4 mb-5 ">
        <div className={`d-flex inform justify-content-center cor-${data.background}`}>
            <div className="mr-3" >
         <img className="info-image" src={data.image} alt="" />
            </div>
            <div className="description"> 
                <h4 className="text-dark">{data.title}</h4>
                <h5 className="text-secondary">{data.description}</h5>
            </div>
        </div>
    </div>
    );
};

export default CardInform;