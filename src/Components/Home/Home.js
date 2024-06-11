import React from 'react';
import image from '../../images/banner-1.png'
import './Home.css'
const Home = () => {
    return (
        < section className="home mb-3">
               <div className=" text-white justify-content-center py-5 ">
            {/* <h1 class=" text-danger  text-center justify-content-center ">Healthy vegetable that you <br/> deserve to eat fresh</h1>
            <h5 class="  text-center justify-content-center ">We source and sell the very best beef, <br/>lamb and pork, sourced with the greatest care from farmer.</h5> */}
            <form action="" class="form-inline justify-content-center">
                            <div class="form-group">
                                
                                {/* <input type="text" class="form-control input" placeholder="search"/> */}
                            </div>
                            
                        </form>
                    
                    {/* <input className="form-control  d-flex " type="search" placeholder="Search" aria-label="Search" /> */}

                    </div>
     
    </section>
    );
};

export default Home;