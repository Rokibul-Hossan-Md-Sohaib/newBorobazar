import React from 'react';
import './CardInform.css';

const CardInform = ({ data }) => {
    return (
     <div className="col-md-3 mb-5">
    <div className={`d-flex mains justify-content-center cor-${data.background}`}>
        <div className="mx-auto text-center">
            <img className="info-image" src={data.image} alt="" />
            <h6 className="text-dark">{data.title}</h6>
        </div>
                {/* <div className="description">
                    <h6 className="text-dark">{data.title}</h6>
                    <h5 className="text-secondary">{data.description}</h5>
                </div> */}
            </div>
        </div>
    );
};

export default CardInform;
