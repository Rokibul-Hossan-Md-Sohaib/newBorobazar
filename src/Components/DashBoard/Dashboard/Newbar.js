import React from 'react';
import AllProducts from '../AllProducts/AllProducts';
import Sidebar from '../Sidebar/Sidebar';
import sideimg from '../../../images/AllProducts/sidebarimage.png';
import sideimg2 from '../../../images/AllProducts/glassim1.png';
import sideimg3 from '../../../images/AllProducts/glassim2.png';
import './Dashboard.css'
const Newbar = () => {
    return (
<div>
    <img className="img-fluid" src={sideimg2} alt="Sidebar" style={{ marginBottom: '50px' }} />
    <img className="img-fluid" src={sideimg3} alt="Sidebar" />
</div>



    );
};
export default Newbar;