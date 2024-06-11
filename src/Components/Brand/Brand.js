import React from 'react';
import './Brand.css'; // Import the CSS file for additional styling
import BrandShow from './BrandShow';
import { glassItem, sunGlassItem } from './glassItem';

export default function Brand() {
  return (
    <section id="idf_banner-0" style={{ paddingBottom: '0px' }}>
      <div className="container">
        <div>
          <div className="heading-container">
            <div className="line"></div>
            <h4 className="heading">OUR BRANDS</h4>
            <div className="line"></div>
          </div>
        </div>
        <a href="/eyeglasses/collections/as-seen-on-shark-tank.html" data-creative-name="TYPE_BANNER" data-promotion-id="hustlr_below_grid" data-promotion-name="hustlr 03072023">
            <img className="img-responsive" src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        <div className="heading-container">
          <div className="text-container">
            <h4 className="text-left">Sun Glass</h4>
            <h6 className="text-right">View All</h6>
          </div>
          <div className="underline"></div>
        
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="row">
              {
                sunGlassItem.map((product, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <BrandShow products={product} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <a href="/eyeglasses/collections/as-seen-on-shark-tank.html" data-creative-name="TYPE_BANNER" data-promotion-id="hustlr_below_grid" data-promotion-name="hustlr 03072023">
            <img className="img-responsive" src="https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg" style={{ maxWidth: '100%', height: 'auto' }} />
          </a>
        <div className="heading-container">
          <div className="text-container">
            <h4 className="text-left">Eye Glass</h4>
            <h6 className="text-right">View All</h6>
          </div>
          <div className="underline"></div>
        </div>
  
        <div className="row mt-5 mb-5">
          <div className="col-12">
            <div className="row">
              {
                glassItem.map((product, index) => (
                  <div className="col-md-3 mb-4" key={index}>
                    <BrandShow products={product} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
