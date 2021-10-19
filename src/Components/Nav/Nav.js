import React from 'react';
import Topbar from '../Topbar/Topbar';
import borobazar from '../../images/borobazar.png'

const Nav = () => {
    return (
      <section>
  <div>
    
</div>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light " data-spy="affix" data-offset-top="197" >
<img src={borobazar} alt="" />
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Features</a>
      
     
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
</div>
</nav>
<div>

</div>
</div>
</section>
    );
};

export default Nav;