import React from 'react';
import './Footer.css';

import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
     { name:"Borobazar", link:"/home" },
     { name:"Men ", link:"/breakfast"},
     { name:"Women", link:"/lunch"},
     { name:"Kids", link:"/dinner"},
     { name:"Others", link:"/"},
    ]

    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const complaines = [
        {name: "Any Kind Of complains" , link: "/emergency"},
        {name: "Check Reviews" , link: "/checkup"},
        {name: "Personal Openion" , link: "/personal-treatment"},
        {name: "Behaiviors" , link: "/tooth-extract"},
     
    ]
    const services = [
        {name: "HomeDelivery" , link: "/delivary"},
        {name: "Check Up Glass" , link: "/checkup"},
        {name: "Respect Your Reviews" , link: "/review"},
        {name: "Any Kind Of Stylish Glass" , link: "/food"},
        {name: "Best SunGlass" , link: "/checkup"},
        
    ]
    return (
        <footer className="footer footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Coplaines" menuItems={complaines}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"></li>
                            <li className="list-inline-item"></li>
                            <li className="list-inline-item"></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
