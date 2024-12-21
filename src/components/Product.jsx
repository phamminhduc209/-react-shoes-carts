import React from 'react'

import ProductItem from "./ProductItem";
import Typography from "./Typography";

function Product() {
  return (
    <>
      <Typography className="cardTitle" text="Our Products"/>
      <div className="cardBody">
        <ProductItem />
      </div>
    </>
  )
}

export default Product