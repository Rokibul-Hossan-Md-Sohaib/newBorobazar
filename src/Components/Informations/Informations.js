import React from 'react';
import CardInform from '../CardInform/CardInform';
import image from '../../images/image.png';
import image2 from '../../images/image2.png'


const dataSet =[
    {
        title: "Spring cleaning for home appiance",
        description:"Get your clean Supplies",
        image:image,
        background: "success"
    },
 
    {
        title: "You pet choice for fresh healthy food",
        description:"Get your clean Supplies",
       image:image2,
        background: "danger"
    },
    {
        title: "Washing item with discount products",
        description:"Get your clean Supplies",
        image:image,
        background: "primary"
    },
]

const Informations = () => {
    return (
        <section className="d-flex justify-content-center">
        <div className="row">
     
            {
                dataSet.map(data => <CardInform data ={data} key={data.title}></CardInform>)
            }
        </div>
        </section>
    );
};

export default Informations;