import React from 'react';
import CardInform from '../CardInform/CardInform';
import image from '../../images/image.png';
import image2 from '../../images/image2.png';
import { Carousel } from 'react-bootstrap';


const dataSet = [
    {
        title: "Round",
        description: "Get your clean Supplies",
        image:"https://static1.lenskart.com/media/desktop/img/Apr22/a2.png",
        background: "success"
    },
    {
        title: "Cat Eye",
        description: "Get your clean Supplies",
        image: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
        background: "danger"
    },
    {
        title: "Transparent",
        description: "Get your clean Supplies",
        image: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
        background: "primary"
    },
    {
        title: "Clubmaster",
        description: "Get your clean Supplies",
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
        background: "danger"
    },
    {
        title: "Blend Edit",
        description: "Get your clean Supplies",
        image: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
        background: "danger"
    },
    {
        title: "Air flex",
        description: "Get your clean Supplies",
        image: "	https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
        background: "danger"
    },
    {
        title: "Round",
        description: "Get your clean Supplies",
        image: "	https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
        background: "danger"
    },
    {
        title: "Auto clip",
        description: "Get your clean Supplies",
        image: " https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
        background: "danger"
    },

  
];

const Informations = () => {
    const chunkedData = [];
    for (let i = 0; i < dataSet.length; i += 4) {
        chunkedData.push(dataSet.slice(i, i + 4));
    }

    return (
        <section className="d-flex justify-content-center">
            <Carousel interval={5000} indicators={false}>
                {chunkedData.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div className="row">
                            {chunk.map(data => (
                                <CardInform data={data} key={data.title} />
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default Informations;
