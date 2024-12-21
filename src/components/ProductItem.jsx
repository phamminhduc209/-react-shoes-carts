import React from 'react'

import Image from './Image';
import Typography from './Typography';

function ProductItem() {
  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: "rgb(212, 215, 214)" }}
      >
        <Image 
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
        />
      </div>

      <Typography className="shopItem_name" text="Nike Air Zoom Pegasus 36"/>

      <Typography 
        className="shopItem_description" 
        text="The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
        that targets breathability across high-heat areas. A slimmer heel
        collar and tongue reduce bulk, while exposed cables give you a
        snug fit at higher speeds."
      />

      <div className="shopItem_bottom">
        <Typography 
          className="shopItem_price" 
          text="$108.97"
        />
        <Typography 
          className="shopItem_button" 
          text="ADD TO CART"
        />
      </div>
    </div>
  )
}

export default ProductItem