import React from 'react';
import BlueCard from '../BlueCard/BlueCard';
import Brand from '../Brand/Brand';
import Dashboard from '../DashBoard/Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Informations from '../Informations/Informations';

import Nav from '../Nav/Nav';
import Topbar from '../Topbar/Topbar';
import Welcome from '../Welcome/Welcome';

const Header = () => {
    return (
        <div>
             <Topbar></Topbar>
            <Nav/>
            
            <Home/>
       <Informations/>
       <Dashboard/>
       <Brand/>
       <BlueCard/>
       <Welcome/>
       <Footer/>
        </div>
    );
};

export default Header;