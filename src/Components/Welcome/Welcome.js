import React from 'react';

import image21 from '../../images/image21.webp';
import image22 from '../../images/image22.webp';
import './Welcome.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="">
                <div className="row">
                    <div className="col-md-6 py-5">
                        <h1 className="welcome-heading">
                            Make your online shop easier <br />with our mobile app
                        </h1>
                        <h5 className="text-secondary">
                            BoroBazar makes online grocery shopping fast and easy.
                            <br />Get groceries delivered and order the best of seasonal farm fresh food.
                        </h5>
                        <div className="img-container d-flex">
                            <img className="app-store-img mr-3" src={image21} alt="App Store" />
                            <img className="app-store-img" src={image22} alt="Google Play" />
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img className="promo-img" src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="Promotion" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
