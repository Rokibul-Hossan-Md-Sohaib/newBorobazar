import React from 'react';
import './Topbar.css'
const Topbar = () => {
    return (
      <section>
    <nav class=" topbar navbar navbar-expand-lg navbar-light " >
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
   <p className="text-white">Claim your online FREE Delivery or Shipping today! Expires in
   </p>
  </div>
</nav>
      </section>
    );
};

export default Topbar;