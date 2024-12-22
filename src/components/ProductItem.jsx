import React from 'react'

import Image from './Image';
import Typography from './Typography';
import { useAppContext } from '../context/AppContext';

function ProductItem({ product, isDisabled }) {
  const { addToCart } = useAppContext();

  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: product.color }}
      >
        <Image src={product.image} />
      </div>

      <Typography className="shopItem_name" text={product.name} />

      <Typography 
        className="shopItem_description" 
        text={product.description}
      />

      <div className="shopItem_bottom">
        <Typography 
          className="shopItem_price" 
          text={`$ ${product.price}`}
        />
        <Typography 
          className={`shopItem_button ${isDisabled ? 'disabled' : ' ' }`} 
          text="ADD TO CART"
          onClick={() => addToCart(product)}
        />
      </div>
    </div>
  )
}

export default ProductItem